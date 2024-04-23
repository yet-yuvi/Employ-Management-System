import React from "react";
import { ReactComponent as BarIcon } from "../../icons/bar.svg";
import emsLogo from "../../logo/emsLogo.jpg";

export const BannerBar = () => {
  return (
    <div className="flex relative px-4 w-full h-[70px] bg-blue-400 items-center ">
      <div className="flex items-center">
        <button className="size-6 items-center mx-4 color-white">
          <BarIcon />
        </button>
        <img className="h-10 w-10 mx-2 rounded-full" src={emsLogo} alt="" />
      </div>
      <div className="flex absolute items-center justify-center w-full">
        <p className="text-white font-medium text-2xl">Employ Management System</p>
      </div>
    </div>
  );
};
