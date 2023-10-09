import React, { useContext } from "react";
import { GrFormPrevious } from "react-icons/Gr";
import { GrFormNext } from "react-icons/Gr";
import { globalContext } from "@/context/globalContext";
type Props = {
  increasePage: Function;
  decreasePage: Function;
  currentPage: Number;
};

function PageSwitcher({ increasePage, decreasePage, currentPage }: Props) {
  return (
    <div className="w-[10%] h-[15%] flex">
      <div className="w-[40%] h-[45%] items-center flex justify-center">
        <button
          onClick={() => {
            decreasePage();
          }}
        >
          <GrFormPrevious />
        </button>
      </div>
      <div className="w-[30%] h-[45%] items-center flex justify-center text-xl">
        {currentPage.toString()}
      </div>
      <div className="w-[40%] h-[45%] items-center flex justify-center">
        <button
          onClick={() => {
            increasePage();
          }}
        >
          <GrFormNext />
        </button>
      </div>
    </div>
  );
}

export default PageSwitcher;
