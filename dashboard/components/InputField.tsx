import React from "react";

type Props = {
  label: String;
};

function InputField({ label }: Props) {
  return (
    <div className="flex flex-col mt-12 gap-2 w-[100%] items-center justify-center">
      <label className="text-white text-2xl">{label}</label>
      <input type="text" className="w-[60%] h-[60px] bg-[#484948]"></input>
    </div>
  );
}

export default InputField;
