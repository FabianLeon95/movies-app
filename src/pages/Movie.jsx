/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import useMovieById from "../hooks/useMovieById";
import { currency, hoursFormat, imageUrl } from "../utils/format";
import { IMAGE_BASE_URL } from "../utils/constants";

const Movie = () => {
  const { id } = useParams();
  const { movie, loading } = useMovieById(id);

  if (loading) return <>Loading...</>;

  return (
    <div
      style={{
        backgroundImage: `url('${IMAGE_BASE_URL}original/${movie.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-dark bg-gradient bg-opacity-75 py-5" data-bs-theme="dark">
        <div className="container d-flex align-items-center gap-5 text-light">
          <img
            className="rounded-4 shadow"
            src={imageUrl(movie.poster_path, 300)}
            alt={movie.title}
          />
          <div>
            <h1 className="fw-bolder mb-1">{movie.title}</h1>
            <div className="d-flex gap-2">
              {/* <VoteAverage rating={movie.vote_average}/> */}
              <span>{movie.release_date}</span>
              <span>•</span>
              <span>{movie.genres.map((g) => g.name).join(", ")}</span>
              <span>•</span>
              <span>{hoursFormat(movie.runtime)}</span>
            </div>
            <h2 className="h5 text-muted fst-italic mt-3">{movie.tagline}</h2>
            <h3 className="h5 fw-bolder mt-3">Resumen</h3>
            <p>{movie.overview}</p>
            <div className="row">
              <div className="col-4">
                <div className="fw-bolder">Titulo original</div>
                <div>{movie.original_title}</div>
              </div>
              <div className="col-4">
                <div className="fw-bolder">Presupuesto</div>
                <div>{currency(movie.budget)}</div>
              </div>
              <div className="col-4">
                <div className="fw-bolder">Recaudación</div>
                <div>{currency(movie.revenue)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const VoteAverage = ({ rating }) => {
//   const percentage = Math.floor(rating * 10);

//   const textColor =
//     percentage > 80
//       ? "text-success"
//       : percentage > 60
//       ? "text-warning"
//       : "text-danger";

//   return (
//     <div>
//       <span className={`h2 mb-0 me-2 ${textColor}`}>{percentage}%</span>
//       <span className="h4 mb-0">Puntuación de usuario</span>
//     </div>
//   );
// };

export default Movie;
