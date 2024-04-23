import { Outlet } from "react-router-dom";
import { BannerBar, NavBar } from "../components";

export const Base = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-50">
        <BannerBar />
      </div>
      <div className="flex h-full mt-[70px]">
        <div className="h-full">
          <NavBar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
