import { Outlet } from "react-router-dom";
import { BannerBar, NavBar, BaseModal, UserDetailDialog } from "../components";
import { useState, useRef, useEffect } from "react";
import { UserProvider, ModalProvider } from "../context";

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
      <ModalProvider>
        <div className="h-screen w-screen flex flex-col relative">
          <div className="absolute top-32 left-1/3 z-20 ">
            <BaseModal>
              <UserDetailDialog />
            </BaseModal>
          </div>
          <div className="fixed top-0 left-0 right-0 z-50">
            <BannerBar toggleNavbar={toggleNavbar} />
          </div>
          <div className="flex h-full mt-[70px] fixed w-full">
            <div className="h-full">{openNavbar && <NavBar />}</div>

            <div ref={outletRef} className="h-[96vh] overflow-auto w-full">
              <Outlet />
            </div>
          </div>
        </div>
      </ModalProvider>
    </UserProvider>
  );
};
