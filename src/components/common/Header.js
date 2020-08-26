import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => (
  <nav>
    <NavLink to="/">HomePage</NavLink>
    {"||"}
    <NavLink to="/about">AboutPage</NavLink>
    {"||"}
    <NavLink to="/course">CoursePage</NavLink>
  </nav>
);

export default HomePage;
