import { globalContext } from "@/context/globalContext";
import React, { useContext } from "react";
import { AiFillEdit } from "react-icons/ai";

type Grade = {
  id: number;
  student_id: number;
  course: string;
  grade_value: number;
};

type Props = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  login: string;
  grades: Array<Grade>;
};

function StudentField({
  id,
  firstName,
  lastName,
  email,
  login,
  grades,
}: Props) {
  const studentGradesValuesOnly = grades.map(
    ({ grade_value }: any) => grade_value
  );
  const { getAvg, setShowEditOverlay } = useContext(globalContext);

  return (
    <div className="w-[90%] h-[7%] text-[#666363] text-xl flex shadow-xl bg-[#D9D9D9] mt-6 transition-[1s] hover:scale-105">
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
        <button
          onClick={() => {
            setShowEditOverlay(true);
          }}
        >
          <AiFillEdit className="w-[35px] h-[35px] transition-[0.5s] hover:text-green-800" />
        </button>
      </div>
    </div>
  );
}

export default StudentField;
