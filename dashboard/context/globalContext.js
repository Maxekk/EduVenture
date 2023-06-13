import React, { useState, createContext } from "react";

export const globalContext = createContext();
export const ContextProvider = ({ children }) => {
  const [userData, setuserData] = useState({
    id: null,
    firstname: "",
    lastname: "",
    emaail: "",
    login: "",
    password: "",
    is_admin: ""
  });
  const [login,setlogin] = useState("")
  const [password,setpassword] = useState("")
  const [isLogged,setisLogged] = useState(false)
  const [route,setRoute] = useState("home");
  return (
    <globalContext.Provider
      value={{ userData, setuserData, isLogged, setisLogged,login,password,setlogin,setpassword,route,setRoute }}
    >
      {children}
    </globalContext.Provider>
  );
};