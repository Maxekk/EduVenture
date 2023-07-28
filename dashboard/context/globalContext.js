import React, { useState, createContext, use } from "react";

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
  const [route,setRoute] = useState("Home");
  const [showOverlay, setShowOverlay] = useState(false)
  const [announcements,setAnnouncements] = useState([])
  const [currentPage,setcurrentPage] = useState(1)
  const fetchAnnouncements = async () => {
    const req = await fetch(`http://localhost:8080/getAnnouncements`)
    const res = await req.json()
    setAnnouncements(res)
}
  
  return (
    <globalContext.Provider
      value={{ userData,
              setuserData,
              isLogged, 
              setisLogged,
              login,password,
              setlogin,
              setpassword,
              route,
              setRoute,
              showOverlay,
              setShowOverlay,
              announcements,
              setAnnouncements,
              fetchAnnouncements,
              currentPage,
              setcurrentPage,
               }}
    >
      {children}
    </globalContext.Provider>
  );
};