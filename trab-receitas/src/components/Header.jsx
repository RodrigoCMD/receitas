import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>Portal de Receitas</h1>

      <nav>
        <NavLink to="/">Início</NavLink>
        <NavLink to="/receitas">Receitas</NavLink>
      </nav>
    </header>
  );
}

export default Header;