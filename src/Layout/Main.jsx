import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/NavbarBox/Navbar";
import Footer from "../components/FooterBox/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
