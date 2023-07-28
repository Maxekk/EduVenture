import React from "react";

type Props = {
  id: Number;
  firstName: String;
  lastName: String;
  email: String;
  login: String;
};

function StudentField({id,firstName,lastName,email,login}: Props) {
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
        4,12
      </div>
      <div className="w-[10%] h-[100%] flex justify-center items-center">
        Edit
      </div>
    </div>
  );
}

export default StudentField;
