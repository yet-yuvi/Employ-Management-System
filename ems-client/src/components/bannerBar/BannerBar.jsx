import { ReactComponent as BarIcon } from "../../icons/bar.svg";
import emsLogo from "../../logo/emsLogo.jpg";

import { useNavigate } from "react-router-dom";
import { SearchBar } from "../../components";
import { DarkMood } from "../../components";

export const BannerBar = ({ toggleNavbar }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <div className="flex relative px-4 w-full h-[70px] bg-blue-400 items-center justify-between ">
      <div className="flex items-center">
        <button
          onClick={() => toggleNavbar()}
          className="size-6 items-center mx-4 color-white  z-40"
        >
          <BarIcon />
        </button>
        <img
          className="h-10 w-10 mx-2 cursor-pointer rounded-full ring-4 ring-gray-400 z-40"
          src={emsLogo}
          onClick={() => handleLogoClick()}
          alt=""
        />
      </div>

      <div className="flex  items-center justify-center ">
        <p className="text-white font-medium text-2xl">
          Employ Management System
        </p>
      </div>

      <div className="flex h-18 w-80  items-center justify-between p-2">
        <SearchBar />

        <DarkMood />
      </div>
    </div>
  );
};
