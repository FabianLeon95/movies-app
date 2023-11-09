import PropTypes from "prop-types";
import MovieCard from "../MovieCard/MovieCard";
import { useApiData } from "../../hooks/useApiData";
import { imageUrl } from "../../utils/format";

const MovieCollection = ({ title, endpoint }) => {
  const { data, loading } = useApiData(endpoint);

  return (
    <div className="py-3">
      <h1 className="mb-4">{title}</h1>
      <div className="d-flex gap-5 overflow-x-scroll">
        {loading ? (
          <div className="mb-3">
            <img
              className="rounded-4 shadow"
              src="https://placehold.co/200x300?text=^_^"
              alt="Cargando..."
            />
            <p className="placeholder-glow mt-3">
              <span className="placeholder rounded col-10"></span>
              <br />
              <span className="placeholder rounded col-7"></span>
            </p>
          </div>
        ) : (
          data.results.map(({ id, title, poster_path, release_date }) => (
            <MovieCard
              key={id}
              id={id}
              title={title}
              imageUrl={imageUrl(poster_path, 200)}
              releaseDate={release_date}
            />
          ))
        )}
      </div>
    </div>
  );
};

MovieCollection.propTypes = {
  title: PropTypes.string,
  endpoint: PropTypes.string,
};

export default MovieCollection;
