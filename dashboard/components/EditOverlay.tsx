import { globalContext } from "@/context/globalContext";
import React, { useContext, useState } from "react";
import Grade from "./Grade";
import AddGradeOverlay from "./AddGradeOverlay";

type GradeType = {
  id: number;
  student_id: number;
  course: string;
  grade_value: number;
};
type editData = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  login: string;
};
function EditOverlay() {
  const {
    setShowEditOverlay,
    editStudentData,
    setEditStudentData,
    invokeSuccesToast,
    invokeErrorToast,
    fetchStudents,
    showGradeOverlay,
    setShowGradeOverlay,
  } = useContext(globalContext);

  const [dataToEdit, setDataToEdit] = useState({
    id: editStudentData.id,
    firstName: editStudentData.firstName,
    lastName: editStudentData.lastName,
    email: editStudentData.email,
    login: editStudentData.login,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    const { value } = e.target;
    setDataToEdit((prev: editData) => ({
      ...prev,
      [fieldName]: value,
    }));
    console.log(dataToEdit);
  };

  const deleteStudent = async () => {
    try{
      const req = await fetch(`http://localhost:8080/deleteStudent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id: editStudentData.id}),
      });
      invokeSuccesToast(`Sucessfully deleted student with id:${editStudentData.id}`);
      fetchStudents();
    }
    catch (error) {
      console.error("Error:", error);
      invokeErrorToast("Sorry something went wrong");
    }
  }

  const modData = async () => {
    try {
      const req = await fetch(`http://localhost:8080/modStudent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToEdit),
      });
      invokeSuccesToast("Sucessfully modified student data");
      fetchStudents();
    } catch (error) {
      console.error("Error:", error);
      invokeErrorToast("Sorry something went wrong");
    }
  };

  return (
    <div className="fixed inset-0 bg-opacity-70 backdrop-filter backdrop-blur-sm flex flex-col items-center justify-center gap-5 bg-[#585656]">
      <div className="w-[45vw] h-[35vh] bg-white shadow-xl flex flex-col rounded-md mt-8">
        <div className="w-[100%] h-[5vh] border-[#BDBABA] border-t-0 border-b-[1px] border-l-0 border-r-0 flex justify-center items-center text-xl text-[#6E6C6C]">
          Personal Information:
        </div>
        <div className="w-[100%] h-[100%] flex flex-col">
          <div className="flex w-[100%] h-[50%]">
            <div className="h-[100%] w-[50%] flex flex-col justify-center items-center gap-5">
              <label className="text-[#6E6C6C] text-xl">Firstname:</label>
              <input
                type="text"
                className="w-[60%] h-[35%] bg-[#F8F7F7] border-2 border-[#6B6A6A] text-xl"
                value={dataToEdit.firstName}
                onChange={(e) => handleInputChange(e, "firstName")}
              ></input>
            </div>
            <div className="h-[100%] w-[50%] flex flex-col justify-center items-center gap-5">
              <label className="text-[#6E6C6C] text-xl">Lastname:</label>
              <input
                type="text"
                className="w-[60%] h-[35%] bg-[#F8F7F7] border-2 border-[#6B6A6A]"
                value={dataToEdit.lastName}
                onChange={(e) => handleInputChange(e, "lastName")}
              ></input>
            </div>
          </div>
          <div className="flex w-[100%] h-[50%]">
            <div className="h-[100%] w-[50%] flex flex-col justify-center items-center gap-5">
              <label className="text-[#6E6C6C] text-xl">Email:</label>
              <input
                type="text"
                className="w-[60%] h-[35%] bg-[#F8F7F7] border-2 border-[#6B6A6A]"
                value={dataToEdit.email}
                onChange={(e) => handleInputChange(e, "email")}
              ></input>
            </div>
            <div className="h-[100%] w-[50%] flex flex-col justify-center items-center gap-5">
              <label className="text-[#6E6C6C] text-xl">Login:</label>
              <input
                type="text"
                className="w-[60%] h-[35%] bg-[#F8F7F7] border-2 border-[#6B6A6A]"
                value={dataToEdit.login}
                onChange={(e) => handleInputChange(e, "login")}
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[45vw] h-[35vh] bg-white shadow-xl flex flex-col rounded-md">
        <div className="w-[100%] h-[5vh] border-[#BDBABA] border-t-0 border-b-[1px] border-l-0 border-r-0 flex justify-center items-center text-xl text-[#6E6C6C]">
          Grades
        </div>
        <div className="w-[100%] h-inherit flex p-3 gap-2 flex-wrap">
          {editStudentData.grades.map((value: GradeType) => {
            return <Grade gradeData={value} />;
          })}

          <button
            className="bg-[#7E7E7E] w-[60px] h-[60px] text-4xl text-white flex justify-center items-center transition-[0.5s] hover:bg-[#3a3a3a]"
            onClick={() => {
              setShowGradeOverlay(true);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="w-[45vw] h-[7vh] mt-4 flex">
        <div className="w-[50%] h-[100%]">
        <button
            className="bg-[#d69696] w-[130px] h-[50px] rounded-md text-white text-xl font-bold transition-[0.5s] hover:bg-[#ea5454]"
            onClick={() => {
              deleteStudent(),
              setShowEditOverlay(false)
            }}
            >
            Delete
          </button>
        </div>
        <div className="w-[50%] h-[100%] flex flex-row-reverse">
        <button
          className="bg-[#B4DAA8] w-[130px] h-[50px] ml-4 rounded-md text-white text-xl font-bold transition-[0.5s] hover:bg-[#73ce57]"
          onClick={() => {
            modData();
            setShowEditOverlay(false);
            setEditStudentData({
              id: null,
              firstName: "",
              lastName: "",
              email: "",
              login: "",
              grades: [],
            });
          }}
        >
          Modify
        </button>
        <button
          className="bg-[#EEEAEA] w-[130px] h-[50px] rounded-md text-[#6C6C6C] text-xl font-bold transition-[0.5s] hover:bg-[#a2a2a2]"
          onClick={() => {
            setShowEditOverlay(false);
            setEditStudentData({
              id: null,
              firstName: "",
              lastName: "",
              email: "",
              login: "",
              grades: [],
            });
          }}
        >
          Cancel
        </button>
        </div>
      </div>
      {showGradeOverlay ? <AddGradeOverlay /> : <div></div>}
    </div>
  );
}

export default EditOverlay;
