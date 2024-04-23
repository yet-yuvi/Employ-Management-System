import React from "react";
import { NavItems } from "../../components";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  const navMenuItems = ["Home", "Employes", "Profile", "About"];

  const handleMenuItemClick = (route) => {
    console.log("hi");
    navigate(`/${route.toLowerCase()}`);
  };
  const handleLogoutClick = () => {
    navigate("/signin");
  };
  return (
    <div className="h-full w-52 bg-gray-300 flex flex-col justify-between items-center">
      <div className="w-full flex flex-col items-center">
        <p className="w-full bg-gray-400 font-semibold text-2xl text-black p-4 border-b-2 text-center">
          Ems
        </p>
        <div className="w-full">
          {navMenuItems.map((navMenuItem) => {
            return (
              <NavItems
                key={navMenuItem}
                title={navMenuItem}
                onClick={() => handleMenuItemClick(navMenuItem)}
              />
            );
          })}
        </div>
      </div>
      <button
        className="mt-auto mb-10 bg-blue-300 p-4 text-xl font-semibold text-gray-800 border-2 shadow-md rounded-xl text-center"
        onClick={handleLogoutClick}
      >
        Logout
      </button>
    </div>
  );
};
