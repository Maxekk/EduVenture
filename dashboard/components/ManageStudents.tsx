import React from "react";
import SortSelect from "./SortSelect";
import SearchBar from "./SearchBar";
import StudentField from "./StudentField";
import PageSwitcher from "./PageSwitcher";

type Props = {
  Id: Number;
  FirstName: String;
  LastName: String;
  Email: String;
  Login: String;
  GradeAvg: Number;
};

function ManageStudents({}: Props) {
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
              Edit
            </div>
          </div>
          <StudentField />
          <StudentField />
          <StudentField />
          <StudentField />
          <StudentField />
          <StudentField />
          <StudentField />
          <StudentField />
        </div>
        <PageSwitcher />
      </div>
    </>
  );
}

export default ManageStudents;
