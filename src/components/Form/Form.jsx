import "./Form.css"
const Form = (props) => {
  return (
    <form action="POST" onSubmit={props.addCourse}>
      <input type="text" value={props.current} onChange={props.updateCourse} autoFocus />
      <button type="submit">Add Course</button>
    </form>
  );
};

export default Form;
