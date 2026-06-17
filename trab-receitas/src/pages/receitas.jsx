import { useEffect, useState } from "react";
import { getRecipes } from "../services/mealService";
import RecipeCard from "../components/receita";
import SearchBar from "../components/pesquisa";
import Loading from "../components/Loading";
function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadRecipes() {
      try {
        setLoading(true);
        setError("");

        const data = await getRecipes();

        if (!cancelled) {
          setRecipes(data);
        }
      } catch {
        if (!cancelled) {
          setError("Não foi possível carregar as receitas.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadRecipes();

    return () => {
      cancelled = true;
    };
  }, []);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
      <h2>Lista de Receitas</h2>

      <SearchBar search={search} setSearch={setSearch} />

      {loading && <Loading />}

      {error && <p className="error">{error}</p>}

      {!loading && !error && filteredRecipes.length === 0 && (
        <p>Nenhuma receita encontrada.</p>
      )}

      {!loading && !error && (
        <div className="grid">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Recipes;