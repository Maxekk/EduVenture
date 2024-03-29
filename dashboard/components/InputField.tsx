import React, { useContext } from "react";
import { globalContext } from "@/context/globalContext";

type Props = {
  label: String;
  isPassword: Boolean;
};

function InputField({ label, isPassword }: Props) {
  const { setlogin, password, setpassword } = useContext(globalContext);

  const handlePassword = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setpassword(target.value);
  };

  const handleLogin = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setlogin(target.value);
  };

  const handleChange = (event: any) => {
    if (isPassword) {
      handlePassword(event);
    } else {
      handleLogin(event);
    }
  };

  return (
    <div className="flex flex-col mt-24 gap-2 w-[100%] items-center justify-center text-black">
      <label className="text-green-800 text-4xl text-left font-serif">
        {label}
      </label>
      <input
        type={`${isPassword ? "password" : "email"}`}
        placeholder={`${isPassword ? "*********" : "somemail@gmail.com"}`}
        onChange={handleChange}
        className="w-[70%] h-[80px] bg-white border-b-2 border-l-0 border-r-0 border-t-0 text-3xl border-green-500 text-green-800 shadow-xl"
      ></input>
    </div>
  );
}

export default InputField;
