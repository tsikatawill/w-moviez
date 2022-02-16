import React from "react";
import { Outlet } from "react-router-dom";
import App from "../App";

const Home = () => {
  return (
    <>
      <Outlet />
      <App />
    </>
  );
};

export default Home;
