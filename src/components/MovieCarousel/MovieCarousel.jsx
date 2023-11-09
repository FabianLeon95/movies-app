import { useNavigate } from "react-router-dom";
import { useApiData } from "../../hooks/useApiData";
import { IMAGE_BASE_URL, POPULAR_ENDPOINT } from "../../utils/constants";
import { dateFormat, limitWords } from "../../utils/format";

const MovieCarousel = () => {
  const { data, loading } = useApiData(POPULAR_ENDPOINT);
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="mb-4">Explorar</h1>
      <div
        id="movieCarousel"
        className="carousel slide shadow"
        data-bs-ride="true"
      >
        <div className="carousel-inner rounded">
          {loading ? (
            <div className="carousel-item active">
              <img
                src="https://placehold.co/1200x500?text=^_^"
                className="d-block w-100"
                alt="Cargando"
              />
            </div>
          ) : (
            data.results.map((movie, index) => (
              <div
                key={index}
                className={`carousel-item${index == 0 ? " active" : ""}`}
                style={{
                  maxHeight: "500px",
                }}
                data-bs-interval="5000"
                role="button"
                onClick={() => navigate(`/movie/${movie.id}`)}
              >
                <img
                  src={`${IMAGE_BASE_URL}original/${movie.backdrop_path}`}
                  className="d-block w-100"
                  alt={movie.title}
                />
                <div
                  className="carousel-caption d-none d-md-block text-start"
                  style={{
                    width: "100%",
                    right: 0,
                    bottom: 0,
                    left: 0,
                    background:
                      "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.9))",
                    paddingTop: "4.25rem",
                    paddingBottom: "3rem",
                    paddingLeft: "5rem",
                    paddingRight: "5rem",
                  }}
                >
                  <h3 className="card-title">{movie.title}</h3>
                  <p className="card-text">
                    <small>{dateFormat(movie.release_date)}</small>
                  </p>
                  <p className="card-text d-none d-md-block">
                    {limitWords(movie.overview, 50)}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#movieCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#movieCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  );
};

export default MovieCarousel;
