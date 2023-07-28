import React, { useContext, useEffect, useState } from "react";
import SortSelect from "./SortSelect";
import SearchBar from "./SearchBar";
import StudentField from "./StudentField";
import PageSwitcher from "./PageSwitcher";
import { globalContext } from "@/context/globalContext";

function ManageStudents() {
  const [students, setStudents] = useState([]);
  const {currentPage, setcurrentPage} = useContext(globalContext)
  const studentsPerPage = 8;

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const req = await fetch(`http://localhost:8080/getStudents`);
    const res = await req.json();
    setStudents(res);
  };

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

  // Calculate the index of the last student to display on the current page
  const indexOfLastStudent = currentPage * studentsPerPage;
  // Calculate the index of the first student to display on the current page
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  // Get the students to display on the current page
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
            {/* ... Remaining code ... */}
          </div>
          {currentStudents.map(({ id, firstname, lastname, email, login }): any => {
            return (
              <StudentField
                id={id}
                firstName={firstname}
                lastName={lastname}
                email={email}
                login={login}
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
