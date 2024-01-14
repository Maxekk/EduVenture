import React, { useContext, useState } from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import InputField from "../components/InputField";
import { globalContext } from "@/context/globalContext";
import { ToastContainer } from "react-toastify";
import { CircularProgress } from "@mui/material";

type Props = {};

function LoginScreen({}: Props) {
  const {
    setuserData,
    setIsLogged,
    login,
    password,
    setIsAdmin,
    invokeErrorToast,
  } = useContext(globalContext);

  const [loading, setLoading] = useState(false);

  async function loginUser() {
    setLoading(true);

    const credentials = {
      login: login,
      password: password,
    };

    try {
      const response = await fetch(`http://localhost:8080/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();
        setuserData(data);
        if (data.id != null && Boolean(data.is_admin) === true) {
          setIsLogged(true);
          setIsAdmin(true);
        } else if (data.id != null) {
          setIsLogged(true);
        } else {
          invokeErrorToast("Wrong credentials !")
        }
      }
    } catch (error) {
      invokeErrorToast("Sorry, looks like servers are off or inaccessible");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-[100%] h-screen bg-[rgb(232,234,237)] flex flex-col">
      <div className="w-[100%] h-[20%] flex justify-center items-center border-b-4 border-b-green-700 bg-white">
        <Image src={logo} width={400} height={200} alt="EduVenture logo" />
      </div>
      <div className="w-[100%] h-[80%] flex items-center justify-center">
        <div className="w-[40%] h-[100%]">
          <div className="w-[100%] h-[100%] flex flex-col gap-5 justify-center">
            <div className="w-[100%] h-[100%] flex flex-col mt-0  items-center">
              <InputField label="Login" isPassword={false} />
              <InputField label="Password" isPassword={true} />
              <button
                className="bg-transparent w-[250px] h-[70px] mt-24 text-green-800 font-mono text-3xl border-4 border-green-500 transition-[1s] hover:bg-green-500 shadow-md"
                onClick={loginUser}
              >
                {loading ? (
                  <CircularProgress />
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default LoginScreen;
