import React, { useContext, useEffect } from "react";
import { globalContext } from "@/context/globalContext";
import Grade from "./Grade";

type Props = {};

interface Grade {
  id: number;
  student_id: number;
  grade_value: number;
  course: string;
}

function MyGrades({}: Props) {
  const { grades, userData, fetchGrades } = useContext(globalContext);

  useEffect(() => {
    fetchGrades();
  }, []);

  const studentGrades = grades.filter(
    ({ student_id }: any) => student_id === userData.id
  );

  const uniqueCourses = Array.from(
    new Set(studentGrades.map((grade: Grade) => grade.course))
  );

  const getGradesByCourse = (course: string) => {
    return studentGrades
      .filter((item: Grade) => item.course === course)
      .map((item: Grade) => item);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <table className="w-3/4 h-3/4 table-fixed border-2 border-collapse border-gray-400 shadow-md">
        <thead>
          <tr>
            <th className="w-[15%] border border-gray-400 px-6 py-3 text-xl bg-[rgb(190,190,190)]">
              Topic
            </th>
            <th className="w-[85%] border border-gray-400 px-6 py-3 text-xl bg-[rgb(190,190,190)]">
              Grades
            </th>
          </tr>
        </thead>
        <tbody>
          {uniqueCourses.map((course) => (
            <tr key={course}>
              <td className="w-1/6 border border-gray-400 px-6 py-3 text-xl text-center bg-[rgb(190,190,190)]">
                {course}
              </td>
              <td className="w-full h-full border border-gray-400 flex gap-5 items-center p-2">
                {getGradesByCourse(course).map((grade: Grade) => (
                  <Grade key={grade.id} gradeData={grade} />
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyGrades;
