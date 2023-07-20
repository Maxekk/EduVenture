import React from "react";
import { GrFormPrevious } from "react-icons/Gr";
import { GrFormNext } from "react-icons/Gr";
type Props = {};

function PageSwitcher({}: Props) {
  return (
    <div className="w-[10%] h-[15%] flex">
      <div className="w-[40%] h-[45%] items-center flex justify-center">
        <button>
          <GrFormPrevious />
        </button>
      </div>
      <div className="w-[30%] h-[45%] items-center flex justify-center text-xl">
        0
      </div>
      <div className="w-[40%] h-[45%] items-center flex justify-center">
        <GrFormNext />
      </div>
    </div>
  );
}

export default PageSwitcher;
