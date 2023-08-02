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
  const [searchFilter,setSearchFilter] = useState("")
  const [sortFilter,setSortFilter] = useState("")
  const fetchAnnouncements = async () => {
    const req = await fetch(`http://localhost:8080/getAnnouncements`)
    const res = await req.json()
    setAnnouncements(res)
}

const getAvg = (gradesArray) => {
  if (gradesArray.length === 0) {
      return "0";
  }

  let sum = 0;
  for (const grade_value of gradesArray) {
      sum += grade_value;
  }
  const average = sum / gradesArray.length;
  return average.toFixed(2);
};
  
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
              searchFilter,
              setSearchFilter,
              sortFilter,
              setSortFilter,
              getAvg
               }}
    >
      {children}
    </globalContext.Provider>
  );
};