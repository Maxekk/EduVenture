import React from "react";
import { BsTrash } from "react-icons/bs";

type Props = {
  title: String;
  upload_date: String;
  content: String;
};

function Announcement({ title, upload_date, content }: Props) {
  return (
    <div className="w-[45vw] h-[45vh] bg-white ml-[-5vw] shadow-xl flex flex-col">
      <div className="w-[45vw] h-[6vh] border-b-2 flex">
        <div className="w-[3.5vw] h-[100%] text-[#646262] flex justify-center items-center text-lg">
          Title:
        </div>
        <div className="w-[39vw] h-[100%] text-[#646262] text-lg font-bold flex items-center ml-0">
          {title}
        </div>
        <div className="w-[3vw] h-[100%] text-red-800 text-lg font-bold flex ml-0 justify-center items-center hover:bg-red-400 hover:text-white transition-[0.5s]">
          <BsTrash />
        </div>
      </div>
      <div className="w-[45vw] h-[6vh] border-b-2 flex">
        <div className="w-[10vw] h-[100%] text-[#646262] flex justify-center items-center text-lg">
          Date of publication:
        </div>
        <div className="w-[37vw] h-[100%] text-[#646262] text-lg font-bold flex items-center ml-0">
          {upload_date}
        </div>
      </div>
      <div className="w-[45vw] h-[33vh] text-lg ml-0 p-2 text-[#393737]">
        {content}
      </div>
    </div>
  );
}

export default Announcement;
