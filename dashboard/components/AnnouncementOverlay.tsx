import React from "react";
import { useContext, useState } from "react";
import { globalContext } from "@/context/globalContext";

type Props = {};

function AnnouncementOverlay({}: Props) {
  const {
    setShowAnnouncementOverlay,
    fetchAnnouncements,
    showAnnouncementOverlay,
    getCurrentDate,
  } = useContext(globalContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addAnnouncement = async () => {
    try {
      const req = await fetch(`http://localhost:8080/addAnnouncement`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          upload_date: getCurrentDate(),
          content: content,
        }),
      });
    } catch (error) {
      console.error("Error:", error);
    }
    fetchAnnouncements();
  };

  return (
    <div className="fixed inset-0 bg-opacity-70 backdrop-filter backdrop-blur-sm flex items-center justify-center  bg-[#585656]">
      <div className="h-[60vh] w-[45vw] ml-4 flex flex-col">
        <div className="w-[45vw] h-[50vh] bg-white shadow-xl flex flex-col rounded-md">
          <div className="w-[100%] h-[15%] border-[#BDBABA] border-b-[1px] flex">
            <div className="w-[10%] h-[100%] text-2xl text-[#6E6C6C] flex items-center p-3">
              Title:
            </div>
            <div className="w-[90%] h-[100%]">
              <input
                className="w-[100%] h-[100%] text-2xl text-black"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              ></input>
            </div>
          </div>
          <div className="w-[100%] h-[15%] flex text-2xl text-[#6E6C6C] items-center p-3">
            Content:
          </div>
          <div className="h-[100%] w-[100%] p-2">
            <textarea
              className="h-[100%] w-[100%] text-xl text-[#4E4B4B] border-[1px] border-[#BDBABA]"
              onChange={(e) => {
                setContent(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
        <div className="w-[100%] h-[10vh] p-5 flex flex-row-reverse">
          <button
            className="bg-[#EEEAEA] w-[130px] h-[50px] ml-4 rounded-md text-[#6C6C6C] text-xl font-bold transition-[0.5s] hover:bg-[#a2a2a2]"
            onClick={() => {
              setShowAnnouncementOverlay(false);
              console.log(showAnnouncementOverlay);
            }}
          >
            Cancel
          </button>
          <button
            className="bg-[#B4DAA8] w-[130px] h-[50px] rounded-md text-white text-xl font-bold transition-[0.5s] hover:bg-[#73ce57]"
            onClick={() => {
              setShowAnnouncementOverlay(false);
              addAnnouncement();
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementOverlay;
