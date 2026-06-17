import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <div className="card">
      {recipe.image && <img src={recipe.image} alt={recipe.name} />}

      <h3>{recipe.name}</h3>

      <p>{recipe.category}</p>

      <Link to={`/receitas/${recipe.id}`}>Ver detalhes</Link>
    </div>
  );
}

export default RecipeCard;