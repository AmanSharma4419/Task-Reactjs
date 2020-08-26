import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import * as courseActions from "../../redux/actions/courseAction";
import { bindActionCreators } from "redux";

class CoursePage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };
  handleChange = (e) => {
    const course = { ...this.state.course, title: e.target.value };
    this.setState({ course });
  };
  handelSubmit = (e) => {
    e.preventDefault();
    this.props.actions.createCourse(this.state.course.title);
  };
  render() {
    console.log(this.props, "getting the courses from redux");
    return (
      <center>
        <form onSubmit={this.handelSubmit}>
          <h2>Course</h2>
          <h3>Add Course</h3>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <input type="submit" value="Save" />
        </form>
      </center>
    );
  }
}

CoursePage.propTypes = {
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
