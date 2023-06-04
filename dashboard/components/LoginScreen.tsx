import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import InputField from "./InputField";

type Props = {};

function LoginScreen({}: Props) {
  return (
    <div className="w-[100%] h-screen bg-[var(--lunar)] flex flex-col">
      <div className="w-[100%] h-[20%] flex justify-center items-center">
        <Image src={logo} width={400} height={200} alt="EduVenture logo" />
      </div>
      <div className="w-[100%] h-[80%] flex items-center justify-center">
        <div className="w-[40%] h-[100%]">
          <div className="w-[100%] h-[100%] flex flex-col gap-5 justify-center">
            <div className="w-[100%] h-[100%] flex flex-col mt-0  items-center">
            <InputField label="Email" isPassword={false}/>
            <InputField label="Password" isPassword={true}/>

            <button className="bg-transparent w-[250px] h-[70px] mt-24 text-white font-mono text-3xl border-4 border-green-500 transition-[1s] hover:bg-green-500">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
