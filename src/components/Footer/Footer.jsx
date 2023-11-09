import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="position-absolute w-100 bg-info bg-opacity-75"
      style={{ bottom: 0 }}
    >
      <div
        className="container d-flex flex-wrap justify-content-center align-items-center"
        style={{ height: "100px" }}
      >
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
