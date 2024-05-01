import React from "react";

import { LeftComponent, MiddleComponent, RightComponent } from "../components";

export const Profile = () => {
  
  return (
    <div className=" flex gap-6 p-8 w-full h-full  bg-gray-200">
      <LeftComponent />

      <MiddleComponent />

      <RightComponent />
    </div>
  );
};
