import React, { useContext } from "react";
import { AppContext } from "../context/Context";

export default function Student({ item }) {
  const { deleteStudent } = useContext(AppContext);
  return (
    <div className="col-md-8 border p-2 my-3 shadow-sm">
      <button
        onClick={() => {
          deleteStudent(item.id);
        }}
        className="float-end bg-danger"
      >
        X
      </button>
      <h5>
        {item.name} - {item.score}
      </h5>
    </div>
  );
}
