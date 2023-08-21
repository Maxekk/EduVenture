import { globalContext } from "@/context/globalContext";
import React, { useContext } from "react";
import Grade from "./Grade";

type Props = {};

function EditOverlay({}: Props) {
  const { setShowEditOverlay } = useContext(globalContext);

  return (
    <div className="fixed inset-0 bg-opacity-70 backdrop-filter backdrop-blur-sm flex flex-col items-center justify-center gap-5 bg-[#585656]">
      <div className="w-[45vw] h-[35vh] bg-white shadow-xl flex flex-col rounded-md mt-8">
        <div className="w-[100%] h-[5vh] border-[#BDBABA] border-t-0 border-b-[1px] border-l-0 border-r-0 flex justify-center items-center text-xl text-[#6E6C6C]">
          Personal Information:
        </div>
        <div className="w-[100%] h-[100%] flex flex-col">
          <div className="flex w-[100%] h-[50%]">
            <div className="h-[100%] w-[50%] flex flex-col justify-center items-center gap-5">
              <label className="text-[#6E6C6C] text-xl">Firstname:</label>
              <input
                type="text"
                className="w-[60%] h-[35%] bg-[#F8F7F7] border-2 border-[#6B6A6A] text-xl"
              ></input>
            </div>
            <div className="h-[100%] w-[50%] flex flex-col justify-center items-center gap-5">
              <label className="text-[#6E6C6C] text-xl">Lastname:</label>
              <input
                type="text"
                className="w-[60%] h-[35%] bg-[#F8F7F7] border-2 border-[#6B6A6A]"
              ></input>
            </div>
          </div>
          <div className="flex w-[100%] h-[50%]">
            <div className="h-[100%] w-[50%] flex flex-col justify-center items-center gap-5">
              <label className="text-[#6E6C6C] text-xl">Email:</label>
              <input
                type="text"
                className="w-[60%] h-[35%] bg-[#F8F7F7] border-2 border-[#6B6A6A]"
              ></input>
            </div>
            <div className="h-[100%] w-[50%] flex flex-col justify-center items-center gap-5">
              <label className="text-[#6E6C6C] text-xl">Login:</label>
              <input
                type="text"
                className="w-[60%] h-[35%] bg-[#F8F7F7] border-2 border-[#6B6A6A]"
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[45vw] h-[35vh] bg-white shadow-xl flex flex-col rounded-md">
        <div className="w-[100%] h-[5vh] border-[#BDBABA] border-t-0 border-b-[1px] border-l-0 border-r-0 flex justify-center items-center text-xl text-[#6E6C6C]">
          Grades
        </div>
        <div className="w-[100%] h-inherit flex p-3 gap-2 flex-wrap">
          <Grade />
          <Grade />
          <Grade />
          <Grade />
          <Grade />
          <Grade />
          <Grade />
          <Grade />
          <Grade />
          <Grade />
          <Grade />
          <Grade />
          <Grade />
          <Grade />
          <Grade />
          <Grade />
          <Grade />
          <Grade />
          <Grade />
          <Grade />
          <button className="bg-[#7E7E7E] w-[60px] h-[60px] text-4xl text-white flex justify-center items-center transition-[0.5s] hover:bg-[#3a3a3a]">
            +
          </button>
        </div>
      </div>
      <div className="w-[45vw] h-[7vh] mt-4 flex flex-row-reverse">
        <button
          className="bg-[#B4DAA8] w-[130px] h-[50px] ml-4 rounded-md text-white text-xl font-bold transition-[0.5s] hover:bg-[#73ce57]"
          onClick={() => {
            // adding feature
            setShowEditOverlay(false);
          }}
        >
          Add
        </button>
        <button
          className="bg-[#EEEAEA] w-[130px] h-[50px] rounded-md text-[#6C6C6C] text-xl font-bold transition-[0.5s] hover:bg-[#a2a2a2]"
          onClick={() => {
            setShowEditOverlay(false);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default EditOverlay;
