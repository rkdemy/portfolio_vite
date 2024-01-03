import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const Root = () => {
  return (
    <div
      style={{
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
