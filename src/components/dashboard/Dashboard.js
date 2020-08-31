import React from "react";
import Button from "../button/Button";

const HomePage = () => (
  <center>
    <Button name="Logout" popup="Logout Sucessfullly" />
    <div>
      <img src={require("../img/dashboard.jpg")} alt="Loading..." />
    </div>
  </center>
);

export default HomePage;
