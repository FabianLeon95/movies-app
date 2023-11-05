import { useState, useEffect } from "react";
import { authorizedGetRequest } from "../utils/api";

const useMovieCredits = (movieId) => {
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCreditsMovieById = async () => {
      try {
        const data = await authorizedGetRequest(
          `movie/${movieId}/credits?language=es-CR`
        );
        let {cast, crew } = data;
        setCredits({cast: cast, director: crew.find(p => p.job === "Director")});
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCreditsMovieById();
  }, [movieId]);

  return { credits, loading, error };
};

export default useMovieCredits;
