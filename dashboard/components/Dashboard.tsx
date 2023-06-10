import React from "react";
import Navbar from "./Navbar";
type Props = {};

function Dashboard({}: Props) {
  return (
    <div className="bg-[rgb(232,234,237)] h-screen">
      <Navbar />
      <div className="h-[93vh]"></div>
    </div>
  );
}

export default Dashboard;
