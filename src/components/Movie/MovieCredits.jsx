/* eslint-disable react/prop-types */
import { imageUrl } from "../../utils/format";

const MovieCredits = ({ credits }) => {
  return (
    <div className="container mt-4 mb-5">
      <div className="d-flex gap-5">
        <div className="h-100">
          <h3 className="mb-4">Director</h3>
          <div className="card h-100">
            <img
              src={imageUrl(credits.director.profile_path, 200)}
              className="card-img-top"
              alt={credits.director.name}
              style={{
                minWidth: "200px",
                maxWidth: "200px",
              }}
            />
            <div className="card-body">
              <h5 className="card-title">{credits.director.name}</h5>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <h3 className="mb-4">Reparto</h3>
          <div className="d-flex gap-3 overflow-x-scroll">
            {credits.cast.map((actor) => (
              <div key={actor.id}>
                <div className="card h-100">
                  <img
                    src={imageUrl(actor.profile_path, 200)}
                    className="card-img-top"
                    alt={actor.name}
                    style={{
                      minWidth: "200px",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{actor.name}</h5>
                    <h6 className="card-subtitletext-body-secondary">
                      {actor.character}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCredits;
