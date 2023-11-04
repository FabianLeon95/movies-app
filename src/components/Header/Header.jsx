import { useState } from "react";
import SearchField from "../SearchField/SearchField";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`search?query=${query}`);
  };

  return (
    <div className="py-5 bg-info bg-gradient bg-opacity-25 shadow-sm">
      <div className="container py-4">
        <h1 className="fw-bolder">Bienvenido.</h1>
        <h2>Millones de películas por descubrir. Explora ahora.</h2>
        <SearchField
          query={query}
          setQuery={setQuery}
          handleSubmit={handleSearchSubmit}
        />
      </div>
    </div>
  );
};

export default Header;
