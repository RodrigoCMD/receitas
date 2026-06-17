import { mapMeal } from "./mealMapper";

const BASE_URL = "https://api-receitas-pi.vercel.app";

export async function getRecipes() {
  const response = await fetch(`${BASE_URL}/receitas/todas`);

  if (!response.ok) {
    throw new Error("Erro ao buscar receitas");
  }

  const data = await response.json();

  if (Array.isArray(data.items)) {
    return data.items.map(mapMeal);
  }

  return [];
}

export async function getRecipeById(id) {
  const response = await fetch(`${BASE_URL}/receitas/todas`);

  if (!response.ok) {
    throw new Error("Erro ao buscar receita");
  }

  const data = await response.json();

  const receitaEncontrada = data.items.find(
    (receita) => String(receita.id) === String(id)
  );

  if (!receitaEncontrada) {
    throw new Error("Receita não encontrada");
  }

  return mapMeal(receitaEncontrada);
}