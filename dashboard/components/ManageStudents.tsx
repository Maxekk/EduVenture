import React, { useContext, useEffect, useState } from "react";
import SortSelect from "./SortSelect";
import SearchBar from "./SearchBar";
import StudentField from "./StudentField";
import PageSwitcher from "./PageSwitcher";
import { globalContext } from "@/context/globalContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Student = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    login: string;
  };

function ManageStudents() {
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);
  const {currentPage, setcurrentPage, searchFilter, sortFilter, getAvg, fetchStudents,fetchGrades, students, grades} = useContext(globalContext)
  const studentsPerPage = 8;

  useEffect(() => {
    fetchStudents();
    fetchGrades();
  }, []);

  useEffect(() => {
    filterStudents();
  }, [searchFilter, sortFilter, students]);

  const filterStudents = () => {
    let filteredResult = students;
    console.log(filteredResult)
    // Filter based on searchFilter
    if (searchFilter.trim() !== "") {
      filteredResult = students.filter((student: Student) =>
        student.lastname.toLowerCase().includes(searchFilter.toLowerCase())
      );
    }

    // Sort based on sortFilter
    if (sortFilter === "id") {
      filteredResult.sort((a: Student, b: Student) => a.id - b.id);
    } else if (sortFilter === "firstname") {
      filteredResult.sort((a: Student, b: Student) =>
        a.firstname.localeCompare(b.firstname)
      );
    } else if (sortFilter === "lastname") {
      filteredResult.sort((a: Student, b: Student) =>
        a.lastname.localeCompare(b.lastname)
      );
    } 
    else if (sortFilter === "gradeAvg") {
        filteredResult.sort((a: Student, b: Student) => {
          const s1Grades = grades.filter(({student_id}: any) => student_id === a.id)
          const avgAArray = s1Grades.map(({grade_value}: any) => grade_value);
          const s2Grades = grades.filter(({student_id}: any) => student_id === b.id)
          const avgBArray = s2Grades.map(({grade_value}: any) => grade_value);
          const avgA = getAvg(avgAArray);
          const avgB = getAvg(avgBArray);
          return avgB - avgA;
        });
    }
    setFilteredStudents([...filteredResult]);
  };

  //Getting data
  

  //Pagination logic
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
  const currentStudents = filteredStudents.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  return (
    <>
      <div className="w-[100%] h-[10%] flex flex-row-reverse p-5">
        <div>
          <SearchBar />
        </div>
        <SortSelect filterStudents={filterStudents}/>
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
          {// Listing Students
          currentStudents
          .filter((student: any) => {
            if(searchFilter === "" || searchFilter === " "){
                return student
            }
            else if(student.lastname.toLowerCase().includes(searchFilter.toLowerCase())){
                return student
            }
          })
          .map(({ id, firstname, lastname, email, login }): any => {
              const studentGrades = grades.filter(({student_id}: any) => student_id === id)
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
         <ToastContainer />
      </div>
    </>
  );
}

export default ManageStudents;
