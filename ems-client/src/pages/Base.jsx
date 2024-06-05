import { Outlet } from "react-router-dom";
import { BannerBar, NavBar, BaseModal, UserDetailDialog, DeleteDialog, EditDialog } from "../components";
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
          <div className="absolute inset-0 flex items-center justify-center z-40">
            <BaseModal>
              {/* <UserDetailDialog /> */}
              {/* <DeleteDialog/> */}
              <EditDialog/>
            </BaseModal>
          </div>
          <div className="fixed top-0 left-0 right-0 z-40">
            <BannerBar toggleNavbar={toggleNavbar} />
          </div>
          <div className="flex h-full mt-[70px] fixed w-full z-40">
            <div className="h-full">{openNavbar && <NavBar />}</div>

            <div ref={outletRef} className="h-[94vh] overflow-auto w-full">
              <Outlet />
            </div>
          </div>
        </div>
      </ModalProvider>
    </UserProvider>
  );
};
