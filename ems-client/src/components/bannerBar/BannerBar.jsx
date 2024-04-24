import { ReactComponent as BarIcon } from "../../icons/bar.svg";
import emsLogo from "../../logo/emsLogo.jpg";
import { useNavigate } from "react-router-dom";


export const BannerBar = ({toggleNavbar}) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  }
  return (
    <div className="flex px-4 w-full h-[70px] bg-blue-400 items-center ">
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
      <div className="flex absolute items-center justify-center w-full">
        <p className="text-white font-medium text-2xl">
          Employ Management System
        </p>
      </div>
      
    </div>
  );
};
