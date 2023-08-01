import React from "react";

type Grade = {
  id: number;
  student_id: number;
  course: string;
  grade_value: number;
}

type Props = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  login: string;
  grades: Array<Grade>;
};

function StudentField({id,firstName,lastName,email,login,grades}: Props) {
  const studentGradesValuesOnly = grades.map(({grade_value}: any) => grade_value);

  const getAvg = (gradesArray: Array<number>): string => {
    if (gradesArray.length === 0) {
        return "0";
    }

    let sum = 0;
    for (const grade_value of gradesArray) {
        sum += grade_value;
    }

    const average = sum / gradesArray.length;
    console.log(`Student ${id} grades: ${gradesArray} avg: ${average} sum: ${sum}`);
    return average.toFixed(2);
};


  return (
    <div className="w-[90%] h-[7%] text-[#666363] text-xl flex shadow-xl bg-[#D9D9D9] mt-6 transition-[0.5s] hover:scale-105">
      <div className="w-[10%] h-[100%] flex justify-center items-center border-r-2 border-l-0 border-b-0 border-t-0 border-[#b3afaf]">
        {id.toString()}
      </div>
      <div className="w-[15%] h-[100%] flex justify-center items-center border-r-2 border-l-0 border-b-0 border-t-0 border-[#b3afaf]">
        {firstName}
      </div>
      <div className="w-[15%] h-[100%] flex justify-center items-center border-r-2 border-l-0 border-b-0 border-t-0 border-[#b3afaf]">
        {lastName}
      </div>
      <div className="w-[25%] h-[100%] flex justify-center items-center border-r-2 border-l-0 border-b-0 border-t-0 border-[#b3afaf]">
        {email}
      </div>
      <div className="w-[15%] h-[100%] flex justify-center items-center border-r-2 border-l-0 border-b-0 border-t-0 border-[#b3afaf]">
        {login}
      </div>
      <div className="w-[10%] h-[100%] flex justify-center items-center border-r-2 border-l-0 border-b-0 border-t-0 border-[#b3afaf]">
        {getAvg(studentGradesValuesOnly).toString()}
      </div>
      <div className="w-[10%] h-[100%] flex justify-center items-center">
        Edit
      </div>
    </div>
  );
}

export default StudentField;
