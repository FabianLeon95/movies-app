import { useNavigate, useSearchParams } from "react-router-dom";
import useMovieSearch from "../hooks/useSearchMovie";
import { useState } from "react";
import SearchField from "../components/SearchField/SearchField";
import { dateFormat, imageUrl, limitWords } from "../utils/format";
import Loader from "../components/Loader/Loader";

const Search = () => {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState(params.get("query") ?? "");
  const { results, loading } = useMovieSearch(params.get("query"));
  const navigate = useNavigate();

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setParams({ query: query });
  };

  return (
    <div className="container">
      <SearchField
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSearchSubmit}
      ></SearchField>
      <div className="vstack gap-4 mt-5">
        {loading ? (
          <Loader />
        ) : results.length > 0 ? (
          results.map(({ id, title, poster_path, release_date, overview }) => (
            <div
              key={id}
              className="card shadow"
              role="button"
              onClick={() => navigate(`/movie/${id}`)}
            >
              <div className="d-flex g-0">
                <div>
                  <img
                    className="rounded-start"
                    style={{ maxWidth: "150px" }}
                    src={imageUrl(poster_path, 200)}
                    alt={title}
                  />
                </div>
                <div>
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        {dateFormat(release_date)}
                      </small>
                    </p>
                    <p className="card-text d-none d-md-block">
                      {limitWords(overview, 100)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <span className="alert alert-secondary rounded-3">
            No hay películas que coincidan con tu búsqueda.
          </span>
        )}
      </div>
    </div>
  );
};

export default Search;
