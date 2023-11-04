import PropTypes from "prop-types";
import MovieCard from "../MovieCard/MovieCard";
import { useApiData } from "../../hooks/useApiData";
import { imageUrl } from "../../utils/format";

const MovieCollection = ({ title, endpoint }) => {
  const { data, loading, error } = useApiData(endpoint);

  return (
    <div className="py-3">
      <h1 className="mb-4">{title}</h1>
      <div className="d-flex gap-5 overflow-x-scroll">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error.Message}</div>
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
