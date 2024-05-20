import React, { useContext } from "react";
import { AppContext } from "../context/Context";
import Student from "./Student";

export default function StudentList() {
    const { student_ar } = useContext(AppContext);
    console.log(student_ar);
    return (
      <div className="container mt-4">
        <div className="row">
          {student_ar.map((item) => {
            return <Student key={item.id} item={item} />;
          })}
        </div>
      </div>
    );
  }
