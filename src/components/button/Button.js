import React from "react";
import PropTypes from "prop-types";

const Button = (props) => (
  <button
    class="button is-primary"
    type="submit"
    onClick={() => {
      return props.name === "Forgot Password"
        ? alert(props.popup)
        : props.name === "Logout"
        ? alert(props.popup)
        : "";
    }}
  >
    {props.name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  popup: PropTypes.string.isRequired,
};

export default Button;
