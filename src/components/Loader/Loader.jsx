const Loader = () => {
  return (
    <div
      className="bg-info"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }}
    >
      <div
        className="spinner-grow text-white"
        role="status"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          marginTop: "-3.5rem",
          marginLeft: "-3.5rem",
          width: "7rem",
          height: "7rem",
        }}
      >
        <span className="visually-hidden">Cargando...</span>
      </div>
    </div>
  );
};

export default Loader;
