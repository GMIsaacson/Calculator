import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Home = () => <h1>Welcome to the Home page!</h1>;
const Simple = () => <h1>This is the Simple page.</h1>;
const Scientific = () => <h1>This is the Scientific page.</h1>;

const Navigation = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/simple">Simple</Link>
          </li>
          <li>
            <Link to="/scientific">Scientific</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simple" element={<Simple />} />
        <Route path="/scientific" element={<Scientific />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
