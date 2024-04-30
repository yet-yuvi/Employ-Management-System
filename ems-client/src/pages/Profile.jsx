import React, { useContext, useState } from "react";
import userProfileImage from "../image/User-Profile-PNG.png";
import { UserContext } from "../context";

export const Profile = () => {
  const [dates] = useState([
    "5-1-2024",
    "9-2-2024",
    "11-4-2024",
    "14-4-2024",
    "17-5-2024",
  ]);
  const { user } = useContext(UserContext);
  return (
    <div className=" flex gap-6 p-8 w-full h-full  bg-gray-200 border-2 border-red-500">
      <div className="flex flex-col gap-4 p-8 items-center w-1/4 h-fit bg-white shadow-lg border-4 border-gray-100 rounded-md">
        <img
          className="w-48 h-48 border-8 border-purple-200"
          src={userProfileImage}
          alt=""
        />

        <div className="flex flex-col gap-1 border-4 border-purple-200 w-full p-4">
          <h1 className="text-2xl py-2 text-blue-400">Leave Taken</h1>
          {dates.map((date, idx) => (
            <p key={idx} className="text-base text-gray-600 font-medium">
              {idx + 1}:<span className="ml-1"></span>
              {date}
            </p>
          ))}
        </div>
      </div>

      <div className="w-2/4 h-fit bg-white p-4 shadow-lg border-4 border-gray-100 rounded-md">
        <h1 className="text-6xl text-gray-800">
          Hello, {user.fname}
          <span className="ml-4" />
          {user.lname}
        </h1>
        <p className="text-base font-medium p-2">{user.position}</p>
        <div className="flex">
          <hr className="w-1/2 my-6 border-b-4 border-purple-200" />
          <p className="px-2 pt-3">Profile</p>
          <hr className="w-1/2 my-6 border-b-4 border-purple-200" />
        </div>
        <div className="flex flex-col  p-4 border-2 border-purple-200">
            <p className="text-2xl p-1 font-custom-bold text-gray-800">Name:<span className="ml-2" />{user.fname}<span className="ml-2" />{user.lname}</p>
            <p className="text-2xl p-1 font-custom-bold text-gray-800">Email:<span className="ml-2" />{user.email}</p>
            <p className="text-2xl p-1 font-custom-bold text-gray-800">Age:<span className="ml-2" />{user.age}</p>
            <p className="text-2xl p-1 font-custom-bold text-gray-800">Depertment:<span className="ml-2" />{user.department}</p>
            <p className="text-2xl p-1 font-custom-bold text-gray-800">Position:<span className="ml-2" />{user.position}</p>
            <p className="text-2xl p-1 font-custom-bold text-gray-800">Salary:<span className="ml-2" />{user.salary}</p>
            <p className="text-2xl p-1 font-custom-bold text-gray-800">Phone No:<span className="ml-2" />{user.phone}</p>
            <p className="text-2xl p-1 font-custom-bold text-gray-800">Address:<span className="ml-2" />{user.address}</p>
            <p className="text-2xl p-1 font-custom-bold text-gray-800">User Type:<span className="ml-2" />{user.userType}</p>
        </div>
      </div>

      <div className="w-1/4 bg-white border-2 border-red-500">hello</div>
    </div>
  );
};
