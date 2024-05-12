import { Outlet } from "react-router-dom";
import { BannerBar, NavBar } from "../components";
import { useState } from "react";
import { UserProvider} from "../context"

export const Base = () => {

  const [openNavbar, setOpenNavbar] = useState(false);

  const toggleNavbar = (event) => {
    console.log("toggling");
    setOpenNavbar((prevOpenNavbar) => !prevOpenNavbar);
  };

  return (
    <UserProvider>
    <div className="h-screen w-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-50">

        <BannerBar toggleNavbar={toggleNavbar} />
      </div>
      <div className="flex h-full mt-[70px]">
        <div className={`h-full ${openNavbar ? 'mr-52' : 'mx-auto'}`}>{openNavbar && <NavBar />}</div>

        <>
          <Outlet />
        </>
      </div>
    </div>
    </UserProvider>
  );
};
