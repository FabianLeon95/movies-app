/* eslint-disable react/prop-types */
const SearchField = ({ query, setQuery, handleSubmit }) => {
  return (
    <form
      className="input-group input-group-lg rounded-pill shadow mt-5"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="form-control rounded-start-pill"
        placeholder="Busca una película..."
        aria-label="Busca una película..."
        aria-describedby="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="btn btn-info rounded-end-pill"
        type="submit"
        id="search"
      >
        Buscar
      </button>
    </form>
  );
};

export default SearchField;
