export function mapMeal(receita) {
  return {
    id: receita.id || receita._id,
    name: receita.receita || receita.nome || receita.title || "Receita sem nome",
    category: receita.tipo || receita.categoria || "Sem categoria",
    instructions:
      receita.modo_preparo ||
      receita.preparo ||
      receita.instructions ||
      "Modo de preparo não informado.",
    image: receita.link_imagem || receita.imagem || receita.image || "",
    ingredients: getIngredients(receita)
  };
}

function getIngredients(receita) {
  if (Array.isArray(receita.ingredientes)) {
    return receita.ingredientes;
  }

  if (typeof receita.ingredientes === "string") {
    return receita.ingredientes.split(",").map((item) => item.trim());
  }

  if (Array.isArray(receita.IngredientesBase)) {
    return receita.IngredientesBase.flatMap(
      (item) => item.nomesIngrediente || []
    );
  }

  return [];
}