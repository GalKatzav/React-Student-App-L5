import { createContext, useState, useLayoutEffect } from "react";

export const AppContext = createContext(null);

export default function ContextProvider({ children }) {
  const [student_ar, setStudentAr] = useState([
    { name: "Gal", score: 100, id: 1 },
    { name: "Adi", score: 90, id: 2 },
    { name: "Sean", score: 80, id: 3 },
  ]);

  useLayoutEffect(() => {
    if (localStorage.getItem("student_ar")) {
      setStudentAr(JSON.parse(localStorage.getItem("student_ar")));
    }
  }, []);

  const addStudent = (newItem) => {
    setStudentAr([...student_ar, newItem]);
    localStorage.setItem(
      "student_ar",
      JSON.stringify([...student_ar, newItem])
    );
  };

  const resetList = () => {
    if (window.confirm("Delete all list?")) {
      setStudentAr([]);
    }
    localStorage.setItem("student_ar", JSON.stringify([]));
  };

  const deleteStudent = (_id) => {
    const filter_ar = student_ar.filter((item) => {
      return item.id != _id;
    });
    setStudentAr(filter_ar);
    localStorage.setItem("student_ar", JSON.stringify([filter_ar]));
  };

  const globalVal = {
    student_ar,
    addStudent,
    resetList,
    deleteStudent,
  };

  return (
    <AppContext.Provider value={globalVal}>{children}</AppContext.Provider>
  );
}
