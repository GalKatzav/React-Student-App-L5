import React, { useRef, useContext } from "react";
import { AppContext } from "../context/Context";

export default function StudentForm() {
  const { addStudent, resetList } = useContext(AppContext);

  // מאפשר לקשר את המשתנה שיצרנו לאינפוט בג'י אס אקס
  const nameRef = useRef();
  const scoreRef = useRef();

  const onSub = (e) => {
    // מונע את ברירת המחדל לעשות ריפרש לעמוד
    e.preventDefault();
    const newItem = {
      name: nameRef.current.value,
      score: scoreRef.current.value,
      id: Date.now(),
    };
    if (newItem.name.length > 0) {
      addStudent(newItem);
    }
    console.log(newItem);
  };

  return (
    <div className="container">
      <h1>Student Form: </h1>
      <form onSubmit={onSub} className="col-md-5">
        <label>Name:</label>
        <input ref={nameRef} type="text" className="form-control" />
        <label>Score:</label>
        <input
          ref={scoreRef}
          type="number"
          defaultValue="1"
          className="form-control"
        />
        <button className="btn btn-success mt-3">Add new Student</button>
        <button
          type="button"
          onClick={resetList}
          className="btn btn-danger mt-3 ms-3"
        >
          Reset List
        </button>
      </form>
    </div>
  );
}
