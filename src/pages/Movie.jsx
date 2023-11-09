/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import useMovieById from "../hooks/useMovieById";
import useMovieCredits from "../hooks/useMovieCredits";
import MovieHeader from "../components/Movie/MovieHeader";
import MovieCredits from "../components/Movie/MovieCredits";
import Loader from "../components/Loader/Loader";

const Movie = () => {
  const { id } = useParams();
  const { movie, loading } = useMovieById(id);
  const { credits, loading: creditsLoading } = useMovieCredits(id);

  if (loading || creditsLoading) return <Loader />;

  return (
    <>
      <MovieHeader movie={movie} />
      <MovieCredits credits={credits} />
    </>
  );
};

export default Movie;
