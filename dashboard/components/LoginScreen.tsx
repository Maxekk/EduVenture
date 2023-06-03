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
        <div className="w-[40%] h-[80%]">
          <div className="w-[100%] h-[70%] flex flex-col gap-5 items-center justify-center">
            <InputField label="Email" />
            <InputField label="Password" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
