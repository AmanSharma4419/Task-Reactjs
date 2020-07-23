import React from "react";
import axios from "axios";
import { LOGIN_API } from "./constants";
export default class Axios extends React.Component {
  static async handleLogin(email, password) {
    const body = {
      identifier: email,
      password: password,
    };
    console.log(body, "in the bbody");
    return await axios
      .post(LOGIN_API, {
        changeOrigin: true,
        identifier: email,
        password: password,
      })
      .then((res) => {
        return res;
      });
  }
}
