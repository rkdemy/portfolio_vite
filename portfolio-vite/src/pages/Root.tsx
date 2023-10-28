import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
