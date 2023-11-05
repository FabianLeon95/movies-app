import { Link } from "react-router-dom";
import { useRandomMovie } from "../../hooks/useRandomMovie";
import { IMAGE_BASE_URL } from "../../utils/constants";
import { dateFormat, limitWords } from "../../utils/format";
// import { useEffect } from "react";

const MovieBanner = () => {
  const { movie, loading, refreshMovie } = useRandomMovie();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     refreshMovie();
  //   }, 10000);

  //   return () => clearInterval(interval);
  // }, [refreshMovie]);

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <h1 className="mb-4">Explorar</h1>
          <div
            className="card d-flex"
            style={{
              maxHeight: "480px",
              overflow: "hidden",
            }}
          >
            <img
              className="card-img"
              style={{
                width: "100%",
                height: "auto",
              }}
              src={`${IMAGE_BASE_URL}original/${movie.backdrop_path}`}
              alt={movie.title}
            />
            <div
              className="card-img-overlay text-white h-100 d-flex flex-column justify-content-end"
              style={{
                background: "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.7))",
              }}
            >
              <h3 className="card-title">{movie.title}</h3>
              <p className="card-text">
                <small>{dateFormat(movie.release_date)}</small>
              </p>
              <p className="card-text d-none d-md-block">
                {limitWords(movie.overview, 50)}
              </p>
              <div className="mt-2">
                <Link className="btn btn-info me-2" to={`/movie/${movie.id}`}>
                  Me interesa
                </Link>
                <button className="btn btn-secondary" onClick={refreshMovie}>
                  Seguir explorando
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieBanner;
