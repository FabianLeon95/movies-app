/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
  return (
    <div className="min-vh-100 position-relative">
      <Navbar />
      <main
        style={{
          paddingBottom: "140px",
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
