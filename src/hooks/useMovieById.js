import { useState, useEffect } from "react";
import { authorizedGetRequest } from "../utils/api";

const useMovieById = (movieId) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const data = await authorizedGetRequest(
          `movie/${movieId}?language=es-CR`
        );
        setMovie(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchMovieById();
  }, [movieId]);

  return { movie, loading, error };
};

export default useMovieById;
