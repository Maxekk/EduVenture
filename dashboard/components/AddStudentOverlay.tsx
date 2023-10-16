import { globalContext } from '@/context/globalContext'
import React, { useContext, useState } from 'react'

type Props = {}
type editData = {
    id: number,
    firstName: string;
    lastName: string;
    email: string;
    login: string;
    password: string,
    is_admin: number
  };

function AddStudentOverlay({}: Props) {

  const { setShowAddStudentOverlay, invokeErrorToast, invokeSuccesToast, fetchStudents } = useContext(globalContext)

  const [dataToEdit, setDataToEdit] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    login: "",
    password: "",
    is_admin: 0
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    const { value } = e.target;
    setDataToEdit((prev: editData) => ({
      ...prev,
      [fieldName]: value,
    }));
    console.log(dataToEdit)
  };

  const createNewStudent = async () => {
    try{
        const req = await fetch(`http://localhost:8080/createNewUsr`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataToEdit),
          });
          invokeSuccesToast("Succesfully created new student")
          fetchStudents()
    }
    catch(e){
        invokeErrorToast("Sorry something went wrong")
        console.log(`Error: ${e}`)
    }
  }

  return (
    <div className="fixed inset-0 bg-opacity-70 backdrop-filter backdrop-blur-sm flex flex-col items-center justify-center gap-5 bg-[#585656]">
      <div className="w-[35vw] h-[60vh] bg-white shadow-xl flex flex-col rounded-md mt-8 items-center">
        <div className='w-[70%] h-[18%] p-2 flex flex-col gap-2 justify-center items-center'>
            <label className="text-[#6E6C6C] text-xl" >Firstname</label>
            <input
                type="text"
                className="w-[60%] h-[50%] bg-[#F8F7F7] border-2 border-[#6B6A6A]"
                onChange={(e) => {handleInputChange(e,"firstName")}}
              ></input>
        </div>
        <div className='w-[70%] h-[18%] p-2 flex flex-col gap-2 justify-center items-center'>
            <label className="text-[#6E6C6C] text-xl" >Lastname</label>
            <input
                type="text"
                className="w-[60%] h-[50%] bg-[#F8F7F7] border-2 border-[#6B6A6A]"
                onChange={(e) => {handleInputChange(e,"lastName")}}
              ></input>
        </div>
        <div className='w-[70%] h-[18%] p-2 flex flex-col gap-2 justify-center items-center'>
            <label className="text-[#6E6C6C] text-xl" >Email</label>
            <input
                type="text"
                className="w-[60%] h-[50%] bg-[#F8F7F7] border-2 border-[#6B6A6A]"
                onChange={(e) => {handleInputChange(e,"email")}}
              ></input>
        </div>
        
        <div className='w-[70%] h-[18%] p-2 flex flex-col gap-2 justify-center items-center'>
            <label className="text-[#6E6C6C] text-xl" >Login</label>
            <input
                type="text"
                className="w-[60%] h-[50%] bg-[#F8F7F7] border-2 border-[#6B6A6A]"
                onChange={(e) => {handleInputChange(e,"login")}}
              ></input>
        </div>
        <div className='w-[70%] h-[18%] p-2 flex flex-col gap-2 justify-center items-center'>
            <label className="text-[#6E6C6C] text-xl" >Password</label>
            <input
                type="password"
                className="w-[60%] h-[50%] bg-[#F8F7F7] border-2 border-[#6B6A6A]"
                onChange={(e) => {handleInputChange(e,"password")}}
              ></input>
        </div>
      </div>
      <div>
      <div className="w-[100%] h-[10vh] p-5 flex flex-row-reverse">
          <button
            className="bg-[#EEEAEA] w-[130px] h-[50px] ml-4 rounded-md text-[#6C6C6C] text-xl font-bold transition-[0.5s] hover:bg-[#a2a2a2]"
            onClick={() => {
                setShowAddStudentOverlay(false)
            }}
          >
            Cancel
          </button>
          <button
            className="bg-[#B4DAA8] w-[130px] h-[50px] rounded-md text-white text-xl font-bold transition-[0.5s] hover:bg-[#73ce57]"
            onClick={() => {
                createNewStudent()
                setShowAddStudentOverlay(false)
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddStudentOverlay