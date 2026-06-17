import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <h2>Bem-vindo ao Portal de Receitas</h2>

      

      <p>
        Você pode consultar a lista de receitas, pesquisar pelo nome e visualizar os detalhes de cada prato.
      </p>

      <Link to="/receitas">Ver receitas</Link>
    </section>
  );
}

export default Home;