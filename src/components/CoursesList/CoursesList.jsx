import { Component } from "react";
import "./CoursesList.css";

class CoursesList extends Component {
  state = {
    isEdit: false,
  };

  // Toggle State
  toggleState = () => {
    let { isEdit } = this.state;
    this.setState({
      isEdit: !isEdit,
    });
  };

  updateCourseItem = (e) => {
    e.preventDefault();
    this.props.editCourse(this.props.index, this.input.value);
    this.toggleState();
  };
  // Render Course Item
  renderCourse = () => {
    return (
      <li className="course-item">
        <span>{this.props.details.name}</span>
        <button
          onClick={() => {
            this.toggleState();
          }}
          className="edit-button"
        >
          Edit
        </button>
        <button
          onClick={() => {
            this.props.deleteCourse(this.props.index);
          }}
          className="delete-button"
        >
          Delete
        </button>
      </li>
    );
  };

  // Render Update Form
  renderUpdateForm = () => {
    return (
      <form action="POST" onSubmit={this.updateCourseItem} className="update-form">
        <input
          type="text"
          defaultValue={this.props.details.name}
          ref={(v) => {
            this.input = v;
          }}
        />
        <button type="submit">Update Course</button>
      </form>
    );
  };

  render() {
    let { isEdit } = this.state;
    return <>{isEdit ? this.renderUpdateForm() : this.renderCourse()}</>;
  }
}

export default CoursesList;
