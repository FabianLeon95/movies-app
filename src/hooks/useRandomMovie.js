import { useEffect, useState } from "react";
import { authorizedGetRequest } from "../utils/api";
import { DISCOVER_ENDPOINT } from "../utils/constants";

export const useRandomMovie = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRandomMovie = async () => {
    try {
      const data = await authorizedGetRequest(DISCOVER_ENDPOINT);
      const randomIndex = Math.floor(Math.random() * data.results.length);
      const randomMovie = data.results[randomIndex];

      setMovie(randomMovie);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomMovie();
  }, []);

  const refreshMovie = () => {
    setLoading(true);
    fetchRandomMovie();
  };

  return { movie, loading, error, refreshMovie };
};
