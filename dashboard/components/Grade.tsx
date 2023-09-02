import React from "react";

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
  return (
    <div className="relative group bg-[#D9D9D9] w-[60px] h-[60px] text-4xl text-white flex justify-center items-center transition-[0.5s] hover:bg-[#b9b8b8]">
      {gradeData.grade_value}
      <div className="hidden group-hover:block absolute bg-[#494949] bg-opacity-75 text-white p-2 bottom-full left-1/2 transform -translate-x-1/2 text-sm">
        {gradeData.course}
      </div>
    </div>
  );
}

export default Grade;
