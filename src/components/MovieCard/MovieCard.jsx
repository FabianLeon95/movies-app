import PropTypes from "prop-types";
import { dateFormat } from "../../utils/format";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ id, title, imageUrl, releaseDate }) => {
  const navigate = useNavigate();

  return (
    <div className="mb-3" role="button" onClick={() => navigate(`/movie/${id}`)}>
      <img className="rounded-4 shadow" src={imageUrl} alt={title} />
      <h2 className="h5 mt-2 mb-1">{title}</h2>
      <div className="text-muted">{dateFormat(releaseDate)}</div>
    </div>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  releaseDate: PropTypes.string,
};

export default MovieCard;
