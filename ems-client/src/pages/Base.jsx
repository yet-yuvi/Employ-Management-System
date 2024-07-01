import { Outlet } from "react-router-dom";
import {
  BannerBar,
  NavBar,
  BaseModal,
} from "../components";
import { useState, useRef, useEffect} from "react";
import { UserProvider, ModalProvider} from "../context";

export const Base = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const outletRef = useRef(null);

  const toggleNavbar = (event) => {
    console.log("toggling");
    setOpenNavbar((prevOpenNavbar) => !prevOpenNavbar);
  };

  const handleOutsideClick = (event) => {
    setOpenNavbar(false);
  };

  useEffect(() => {
    outletRef.current.addEventListener("click", handleOutsideClick);
  }, []);

  return (
    <UserProvider>
      <div className="h-screen w-screen flex flex-col">
        <div className="fixed top-0 left-0 right-0 z-40">
          <BannerBar toggleNavbar={toggleNavbar} />
        </div>
        <div className="flex h-full mt-[70px] fixed w-full z-40">
          <div className="h-full">{openNavbar && <NavBar />}</div>
          <ModalProvider>
            <div ref={outletRef} className="relative h-[94vh] w-full">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <BaseModal />
              </div>
              <div className="h-full overflow-auto">
                <Outlet />
              </div>
            </div>
          </ModalProvider>
        </div>
      </div>
    </UserProvider>
  );
};
