import { globalContext } from "@/context/globalContext";
import React, { useContext, useState } from "react";

type Props = {};

function AddGradeOverlay({}: Props) {
  const { setShowGradeOverlay, fetchGrades, editStudentData } =
    useContext(globalContext);
  const [subject, setSubject] = useState("Math");
  const [grade, setGrade] = useState(1);

  const addGrade = async () => {
    //TODO (fix) Grades are not refreshing after beeing added
    try {
      const req = await fetch(`http://localhost:8080/addGrade`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          student_id: editStudentData.id,
          course: subject,
          grade_value: grade,
        }),
      });
      fetchGrades();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-opacity-70 backdrop-filter backdrop-blur-sm flex flex-col items-center justify-center gap-5 bg-[#585656]">
      <div className="w-[20vw] h-[25vh] bg-white shadow-xl flex flex-col rounded-md mt-8">
        <div className="w-[100%] h-[50%] flex justify-cetner items-center flex-col gap-5">
          <label className="text-[#6E6C6C] text-3xl">Grade:</label>
          <select
            name="number"
            className="bg-[#dcdbdb] shadow-sm w-[50%] h-[30%]"
            onChange={(e) => {
              setGrade(Number(e.target.value));
            }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <div className="w-[100%] h-[50%] flex flex-col justify-center items-center gap-5">
          <label className="text-[#6E6C6C] text-3xl">Subject:</label>
          <select
            name="number"
            className="bg-[#dcdbdb] shadow-sm w-[50%] h-[30%]"
            onChange={(e) => {
              setSubject(e.target.value);
              console.log(subject);
            }}
          >
            <option value="Math">Math</option>
            <option value="English">English</option>
            <option value="Geography">Geography</option>
            <option value="Science">Science</option>
            <option value="History">History</option>
          </select>
        </div>
      </div>
      <div className="w-[20vw] h-[7%] flex justify-center items-center gap-5">
        <button
          className="bg-[#B4DAA8] w-[130px] h-[50px] ml-4 rounded-md text-white text-xl font-bold transition-[0.5s] hover:bg-[#73ce57]"
          onClick={() => {
            addGrade();
            setShowGradeOverlay(false);
          }}
        >
          Add
        </button>
        <button
          className="bg-[#EEEAEA] w-[130px] h-[50px] rounded-md text-[#6C6C6C] text-xl font-bold transition-[0.5s] hover:bg-[#a2a2a2]"
          onClick={() => {
            setShowGradeOverlay(false);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AddGradeOverlay;
