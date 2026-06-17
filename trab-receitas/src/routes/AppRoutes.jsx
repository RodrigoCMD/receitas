import { Routes, Route } from "react-router-dom";
import Home from "../pages/inicio";
import Recipes from "../pages/receitas";
import RecipeDetail from "../pages/detalReceitas";
import NotFound from "../pages/naoEnct";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/receitas" element={<Recipes />} />
      <Route path="/receitas/:id" element={<RecipeDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;