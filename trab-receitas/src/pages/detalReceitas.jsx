import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../services/mealService";
import Loading from "../components/Loading";

function RecipeDetail() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadRecipe() {
      try {
        setLoading(true);
        setError("");

        const data = await getRecipeById(id);

        if (!cancelled) {
          setRecipe(data);
        }
      } catch {
        if (!cancelled) {
          setError("Não foi possível carregar os detalhes da receita.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadRecipe();

    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!recipe) {
    return <p>Receita não encontrada.</p>;
  }

  return (
    <section className="detail">
      <h2>{recipe.name}</h2>

      {recipe.image && <img src={recipe.image} alt={recipe.name} />}

      <p>
        <strong>Categoria:</strong> {recipe.category}
      </p>

      <h3>Ingredientes</h3>

      {recipe.ingredients.length > 0 ? (
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      ) : (
        <p>Ingredientes não informados.</p>
      )}

      <h3>Modo de preparo</h3>

      <p>{recipe.instructions}</p>
    </section>
  );
}

export default RecipeDetail;