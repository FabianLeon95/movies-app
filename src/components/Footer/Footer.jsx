import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-info bg-opacity-75">
      <div className="container d-flex flex-wrap justify-content-center align-items-center py-5 mt-4">
        <Link
          className="navbar-brand fw-bolder text-uppercase"
          to="/"
          style={{ fontSize: "1.5rem" }}
        >
          <i className="bi bi-film me-2"></i>
          Movies
          <span className="fw-light">App</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
