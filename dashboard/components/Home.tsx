import React, { useEffect, useState } from 'react'
import Image from "next/image";
import logo from "../public/logo.png";
import {GiTeacher} from 'react-icons/gi'
import {MdSchool} from 'react-icons/md'

type Props = {}
type UsersData = {
  totalStudents: Number,
  totalTeachers: Number
}

function Home({}: Props) {
  const [usersData,setUsersData] = useState<UsersData>({
    totalStudents: 0,
    totalTeachers: 0
  })
  
  const fetchUserData = async () => {
    const req = await fetch(`http://localhost:8080/getUsrCount`);
    const res = await req.json();
    setUsersData(res)
  };

  useEffect(() => {
    fetchUserData()
  },[])

  return (
    <div className='w-[100%] h-[100%]'>
      <div className='w-[100%] h-[50%] flex justify-center items-center'>
      <Image src={logo} width={800} height={400} alt="EduVenture logo" />
      </div>
      <div className='w-[50%] h-[50%] float-left flex items-center justify-lef flex-row-reverse'>
        <div className='bg-[#F2F4F8] w-[500px] h-[300px] rounded-3xl border-slate-300 border-2 mt-[-5vh] mr-12 shadow-md flex'>
          <div className='w-[60%] h-[100%] text-3xl p-4'>
            <div className='h-[50%] w-[100%] p-4'>Current number of students</div>
            <div className='h-[50%] w-[100%] text-8xl align-text-bottom p-2 mt-4 ml-2'>{usersData.totalStudents.toString()}</div>
          </div>
          <div className='w-[40%] h-[100%] flex items-center justify-center text-gray-600'> 
          <MdSchool className='w-[200px] h-[200px] mr-6'/>
        </div>
        </div>
      </div>
      <div className='w-[50%] h-[50%] float-left flex items-center justify-left '>
      <div className='bg-[#F2F4F8] w-[500px] h-[300px] rounded-3xl border-slate-300 border-2 mt-[-5vh] mr-12 shadow-md flex'>
          <div className='w-[60%] h-[100%] text-3xl p-4'>
            <div className='h-[50%] w-[100%] p-4'>Current number of teachers</div>
            <div className='h-[50%] w-[100%] text-8xl align-text-bottom p-2 mt-4 ml-2'>{usersData.totalTeachers.toString()}</div>
          </div>
          <div className='w-[40%] h-[100%] flex items-center justify-center text-gray-600'>
          <GiTeacher className='w-[200px] h-[200px] mr-6'/>
        </div>
      </div>  
      </div>
    </div>
  )
}

export default Home