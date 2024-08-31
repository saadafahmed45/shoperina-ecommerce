import React from "react";
import Sidebar from "./components/Sidebar";

const Dashboardlayout = ({ children }) => {
  return (
    <div className="  bg-green-500 ">
      <Sidebar />
      {children}
      <footer>footer</footer>
    </div>
  );
};

export default Dashboardlayout;
