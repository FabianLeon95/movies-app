import Header from "../components/Header/Header";
import MovieBanner from "../components/MovieBanner/MovieBanner";
import MovieCollection from "../components/MovieCollection/MovieCollection";
import { NOW_PLAYING_ENDPOINT, TOP_RATED_ENDPOINT } from "../utils/constants";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container vstack gap-4">
        <MovieCollection title="En cartelera" endpoint={NOW_PLAYING_ENDPOINT} />
        <MovieBanner />
        <MovieCollection
          title="Mejor valoradas"
          endpoint={TOP_RATED_ENDPOINT}
        />
      </div>
    </>
  );
};

export default Home;
