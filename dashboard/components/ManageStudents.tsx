import React, { useContext, useEffect, useState } from "react";
import SortSelect from "./SortSelect";
import SearchBar from "./SearchBar";
import StudentField from "./StudentField";
import PageSwitcher from "./PageSwitcher";
import { globalContext } from "@/context/globalContext";

function ManageStudents() {
  const [students, setStudents] = useState([]);
  const [grades,setGrades] = useState([]);
  const {currentPage, setcurrentPage} = useContext(globalContext)
  const studentsPerPage = 8;

  useEffect(() => {
    fetchStudents();
    fetchGrades();
  }, []);

  const fetchStudents = async () => {
    const req = await fetch(`http://localhost:8080/getStudents`);
    const res = await req.json();
    setStudents(res);
  };

  const fetchGrades = async () => {
    const req = await fetch(`http://localhost:8080/getGrades`);
    const res = await req.json();
    setGrades(res);
  }

  const decreasePage = () => {
    if (currentPage > 1) {
      setcurrentPage((prev: any) => prev - 1);
    }
  };
  
  const increasePage = () => {
    const maxPage = Math.ceil(students.length / studentsPerPage);
    if (currentPage < maxPage) {
      setcurrentPage((prev: any) => prev + 1);
    }
  }

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent);

  return (
    <>
      <div className="w-[100%] h-[10%] flex flex-row-reverse p-5">
        <div>
          <SearchBar />
        </div>
        <SortSelect />
      </div>
      <div className="w-[100%] h-[90%] flex items-center justify-center flex-col">
        <div className="w-[80%] h-[100%] flex items-center flex-col">
          <div className="w-[90%] h-[10%] text-[#666363] text-xl flex">
          <div className="w-[10%] h-[100%] flex justify-center items-center">
              ID
            </div>
            <div className="w-[15%] h-[100%] flex justify-center items-center">
              Firstname
            </div>
            <div className="w-[15%] h-[100%] flex justify-center items-center">
              Lastname
            </div>
            <div className="w-[25%] h-[100%] flex justify-center items-center">
              Email
            </div>
            <div className="w-[15%] h-[100%] flex justify-center items-center">
              Login
            </div>
            <div className="w-[10%] h-[100%] flex justify-center items-center">
              GradeAvg
            </div>
            <div className="w-[10%] h-[100%] flex justify-center items-center">
              Manage
            </div>
          </div>
          {currentStudents.map(({ id, firstname, lastname, email, login }): any => {
              const studentGrades = grades.filter(({student_id}) => student_id === id)
            return (
              <StudentField
                id={id}
                firstName={firstname}
                lastName={lastname}
                email={email}
                login={login}
                grades={studentGrades}
              />
            );
          })}
        </div>
        <PageSwitcher
          currentPage={currentPage}
          decreasePage={decreasePage}
          increasePage={increasePage}
        />
      </div>
    </>
  );
}

export default ManageStudents;
