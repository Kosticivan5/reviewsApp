import { useEffect, useState } from "react";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

const NavButtons = ({ increase, decrease }) => {
  // console.log(count);

  return (
    <div className="mx-auto flex justify-center items-center gap-8 mt-8">
      <BsFillArrowLeftSquareFill
        className="bg-red-900 hover:text-blue-300 active:scale-90 cursor-pointer transition-all duration-300 w-7 h-7 rounded-md"
        onClick={decrease}
      />
      <BsFillArrowRightSquareFill
        className="bg-red-900 hover:text-blue-300 active:scale-90  cursor-pointer transition-all duration-300 w-7 h-7 rounded-md"
        onClick={increase}
      />
    </div>
  );
};
export default NavButtons;
