/* eslint-disable react/prop-types */
import { IMAGE_BASE_URL } from "../../utils/constants";
import { currency, hoursFormat, imageUrl } from "../../utils/format";

const MovieHeader = ({ movie }) => {
  return (
    <div
      style={{
        backgroundImage: `url('${IMAGE_BASE_URL}original/${movie.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className="bg-dark bg-gradient bg-opacity-75 py-5"
        data-bs-theme="dark"
      >
        <div className="container d-flex align-items-center gap-5 text-light">
          <img
            className="rounded-4 shadow"
            src={imageUrl(movie.poster_path, 300)}
            alt={movie.title}
          />
          <div>
            <h1 className="fw-bolder mb-1">{movie.title}</h1>
            <div className="d-flex gap-2">
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

export default MovieHeader;
