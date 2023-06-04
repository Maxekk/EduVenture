import React from "react";

type Props = {
  label: String;
  isPassword: Boolean
};

function InputField({ label, isPassword }: Props) {
  return (
    <div className="flex flex-col mt-24 gap-2 w-[100%] items-center justify-center text-left">
      <label className="text-white text-4xl text-left font-serif">{label}</label>
      <input type={`${isPassword ? "password" : "email"}`} placeholder={`${isPassword ? "" : "somemail@gmail.com"}`} className="w-[70%] h-[80px] bg-[#484948] border-b-2 border-l-0 border-r-0 border-t-0 text-3xl text-white"></input>
    </div>
  );
}

export default InputField;
