import { globalContext } from "@/context/globalContext";
import React, { useContext, useState } from "react";
import { FaTrash } from 'react-icons/Fa'

type Props = {
  gradeData: Grade;
};
type Grade = {
  id: number;
  student_id: number;
  course: string;
  grade_value: number;
};

function Grade({ gradeData }: Props) {
  const { fetchGrades } = useContext(globalContext)
  const [clicksCount, setClicksCount] = useState(0)

  const handleClick = () => {
    setClicksCount(prev => prev + 1)
    console.log(clicksCount)
    if(clicksCount == 1) {
      deleteGrade()
    }
  }

  const deleteGrade = async  () => {
    console.log("request")
      try{
        await fetch(`http://localhost:8080/deleteGrade`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id: gradeData.id}),
      });
      fetchGrades()
    }
    catch(e){
      console.log("Sorry, something went wrong", e)
    }
  }

  return (
    <div className={
      clicksCount == 2 ? "hidden" : `relative group ${clicksCount == 1 ? "bg-red-400" : "bg-[#D9D9D9]"} w-[60px] h-[60px] text-4xl text-white flex justify-center items-center transition-[0.5s] ${clicksCount == 1 ? "hover:bg-red-300": "hover:bg-[#b9b8b8]"}`
    } 
    onClick={handleClick}
    >
      {clicksCount == 1 ? <FaTrash  className="w-[20px] h-[20px]"/> : gradeData.grade_value}
      <div className="hidden group-hover:block absolute bg-[#494949] bg-opacity-75 text-white p-2 bottom-full left-1/2 transform -translate-x-1/2 text-sm">
        {gradeData.course}
      </div>
    </div>
  );
}

export default Grade;
