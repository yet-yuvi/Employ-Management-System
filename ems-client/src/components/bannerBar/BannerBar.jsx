import { ReactComponent as BarIcon } from "../../icons/bar.svg";
import emsLogo from "../../logo/emsLogo.jpg";


export const BannerBar = ({toggleNavbar}) => {

  return (
    <div className="flex relative px-4 w-full h-[70px] bg-blue-400 items-center ">
      <div className="flex items-center">
        <button
          onClick={() => toggleNavbar()}
          className="size-6 items-center mx-4 color-white ring-4 ring-red-300 z-40"
        >
          <BarIcon />
        </button>
        <img
          className="h-10 w-10 mx-2 rounded-full ring-4 ring-gray-400"
          src={emsLogo}
          alt=""
        />
      </div>
      <div className="flex absolute items-center justify-center w-full">
        <p className="text-white font-medium text-2xl">
          Employ Management System
        </p>
      </div>
      
    </div>
  );
};
