import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Platform from "./Platform";
import Test from "../Test";

const Navigation = () => {
  return (
    <div>
      {" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
};

export default Navigation;
