import React, { useState, createContext } from "react";
import { toast } from 'react-toastify';

export const globalContext = createContext();
export const ContextProvider = ({ children }) => {
  const [userData, setuserData] = useState({
    id: null,
    firstname: "",
    lastname: "",
    emaail: "",
    login: "",
    password: "",
    is_admin: "",
  });
  const [students, setStudents] = useState([]);
  const [grades,setGrades] = useState([]);
  const [login, setlogin] = useState("");
  const [password, setpassword] = useState("");
  const [isLogged, setisLogged] = useState(false);
  const [route, setRoute] = useState("Home");
  const [showAnnouncementOverlay, setShowAnnouncementOverlay] = useState(false);
  const [showEditOverlay, setShowEditOverlay] = useState(false);
  const [announcements, setAnnouncements] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [searchFilter, setSearchFilter] = useState("");
  const [sortFilter, setSortFilter] = useState("");
  const [showGradeOverlay, setShowGradeOverlay] = useState(false);
  const [editStudentData, setEditStudentData] = useState({
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    login: "",
    grades: [],
  });

  const fetchAnnouncements = async () => {
    const req = await fetch(`http://localhost:8080/getAnnouncements`);
    const res = await req.json();
    setAnnouncements(res);
  };

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

  const invokeSuccesToast = (text) => {
    toast.success(text, {
      className: 'bg-green-500 text-white',
    });
  }

  const invokeErrorToast = (text) => {
    toast.error(text, {
      className: 'bg-red-500 text-white',
    });
  }

  const fetchStudents = async () => {
    const req = await fetch(`http://localhost:8080/getStudents`);
    const res = await req.json();
    setStudents(res);
  };
  const fetchGrades = async () => {
    const req = await fetch(`http://localhost:8080/getGrades`);
    const res = await req.json();
    setGrades(res);
  }

  return (
    <globalContext.Provider
      value={{
        userData,
        setuserData,
        isLogged,
        setisLogged,
        login,
        password,
        setlogin,
        setpassword,
        route,
        setRoute,
        showAnnouncementOverlay,
        setShowAnnouncementOverlay,
        announcements,
        setAnnouncements,
        fetchAnnouncements,
        currentPage,
        setcurrentPage,
        searchFilter,
        setSearchFilter,
        sortFilter,
        setSortFilter,
        getAvg,
        showEditOverlay,
        setShowEditOverlay,
        editStudentData,
        setEditStudentData,
        invokeSuccesToast,
        invokeErrorToast,
        students,
        setStudents,
        grades,
        setGrades,
        fetchStudents,
        fetchGrades,
        showGradeOverlay,
        setShowGradeOverlay
      }}
    >
      {children}
    </globalContext.Provider>
  );
};
