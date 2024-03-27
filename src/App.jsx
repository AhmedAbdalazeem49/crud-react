import { Component } from "react";
import CoursesList from "./components/CoursesList/CoursesList";
import Form from "./components/Form/Form";
import "./App.css"

class App extends Component {
  state = {
    courses: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    current: "",
  };

  // Update State
  updateCourse = (e) => {
    this.setState({
      current: e.target.value,
    });
  };

  // Add Course
  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({ name: current });
    this.setState({
      courses,
      current: "",
    });
  };

  // Delete Course
  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses,
    });
  };

  // Edit Function
  editCourse = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course["name"] = value;
    this.setState({
      courses,
    });
  };

  render() {
    return (
      <section className="App">
        <h2>Courses CRUD</h2>
        <Form
          updateCourse={this.updateCourse}
          addCourse={this.addCourse}
          current={this.state.current}
        />
        {this.state.courses.map((course, index) => {
          return (
            <CoursesList
              details={course}
              deleteCourse={this.deleteCourse}
              editCourse={this.editCourse}
              index={index}
              key={index}
            />
          );
        })}
      </section>
    );
  }
}

export default App;
