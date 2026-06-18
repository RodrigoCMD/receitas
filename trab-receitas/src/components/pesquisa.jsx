function SearchBar({ search, setSearch }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Buscar receita pelo nome."
      value={search}
      onChange={(event) => setSearch(event.target.value)}
    />
  );
}

export default SearchBar;