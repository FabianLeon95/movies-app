import { useState, useEffect } from "react";
import { authorizedGetRequest } from "../utils/api";
import { SEARCH_ENDPOINT } from "../utils/constants";

const useMovieSearch = (query) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query) {
      const fetchMovies = async () => {
        try {
          setLoading(true);
          const data = await authorizedGetRequest(`${SEARCH_ENDPOINT}&query=${query}`);
          setResults(data.results);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };

      fetchMovies();
    } else {
      setResults([]);
    }
  }, [query]);

  return { results, loading, error };
};

export default useMovieSearch;
