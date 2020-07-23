import React, { useState } from "react";
import Axios from "./Axios";

export default function Auth(props) {
  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userEmail || !userPassword) {
      alert("Please fill both username and email");
    } else {
      Axios.handleLogin(userEmail, userPassword).then((data) => {
        if (data.data !== "") {
          alert("Login Sucessfully");
          localStorage.setItem("userToken", data.data.jwt);
          props.history.push("/articles");
          window.location.reload();
        } else {
          alert("User not found");
        }
      });
    }
  };
  return (
    <>
      <React.Fragment>
        <center>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div
              style={{ width: "30%", marginLeft: "10px", marginTop: "20px" }}
            >
              <center>
                <h1>UserLogin</h1>
              </center>
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input
                    class="input"
                    type="email"
                    placeholder="Enter Email"
                    value={userEmail}
                    onChange={(e) => {
                      setuserEmail(e.target.value);
                    }}
                  />{" "}
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left">
                  <input
                    class="input"
                    type="password"
                    placeholder="EnterPassword"
                    value={userPassword}
                    onChange={(e) => {
                      setuserPassword(e.target.value);
                    }}
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <center>
                <button class="button is-primary" type="submit">
                  Login
                </button>
              </center>
            </div>
          </form>
        </center>
      </React.Fragment>
    </>
  );
}
