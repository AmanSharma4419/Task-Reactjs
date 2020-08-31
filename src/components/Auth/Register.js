import React, { useState } from "react";
import { connect } from "react-redux";
import * as userActions from "../../redux/actions/userAction";
import { bindActionCreators } from "redux";
import Button from "../button/Button";
const Register = (props) => {
  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [Contact, setContact] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [dateOfBirth, setDateofBirth] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.actions.createUser({
      name: userName,
      email: userEmail,
      contact: Contact,
      password: userPassword,
      dob: dateOfBirth,
    });
  };
  return (
    <React.Fragment>
      <center>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
            console.log(props.actions);
          }}
        >
          <div style={{ width: "30%", marginLeft: "10px", marginTop: "50px" }}>
            <center>
              <h1>UserRegister</h1>
            </center>
            <br />
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input
                  class="input"
                  type="text"
                  placeholder="Enter Name"
                  value={userName}
                  onChange={(e) => {
                    setuserName(e.target.value);
                  }}
                />
              </p>
            </div>
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
                  type="text"
                  placeholder="Enter Contact"
                  value={Contact}
                  onChange={(e) => {
                    setContact(e.target.value);
                  }}
                />
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <div class="field">
                  <p class="control has-icons-left">
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
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <div class="field">
                  <p class="control has-icons-left">
                    <input
                      class="input"
                      type="date"
                      value={dateOfBirth}
                      onChange={(e) => {
                        setDateofBirth(e.target.value);
                      }}
                    />
                  </p>
                </div>
              </p>
            </div>

            <center>
              <Button name="Register" />
            </center>
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
