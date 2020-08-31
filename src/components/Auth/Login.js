import React, { useState } from "react";
import { connect } from "react-redux";
import * as userActions from "../../redux/actions/userAction";
import { bindActionCreators } from "redux";
import Button from "../button/Button";

const Register = (props) => {
  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.actions.loginUser({
      email: userEmail,
      password: userPassword,
    });
    props.history.push("/dashboard");
  };
  return (
    <React.Fragment>
      <center>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div style={{ width: "30%", marginLeft: "10px", marginTop: "50px" }}>
            <center>
              <h1>UserLogin</h1>
            </center>
            <br />
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
                />
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input
                  class="input"
                  type="password"
                  placeholder="Enter Password"
                  value={userPassword}
                  onChange={(e) => {
                    setuserPassword(e.target.value);
                  }}
                />
              </p>
            </div>

            <center>
              <Button name="Login" />
            </center>
            <p>Forgot Password Click Below</p>
            <Button
              name="Forgot Password"
              popup="YOUR PASSWORD SENT TO GIVEN EMAIL"
            />
          </div>
        </form>
      </center>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return state;
};
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);
