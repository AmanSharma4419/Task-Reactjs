import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => (
  <center>
    <p>
      Welcome To Homepage!
      <nav>
        <NavLink to="/about">Learn More</NavLink>
      </nav>
    </p>
  </center>
);

export default HomePage;
