import React, { useContext } from "react";
import { UserContext } from "../../context";

export const MiddleComponent = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-2/4 h-fit bg-white p-4 shadow-lg border-4 border-gray-100 rounded-md">
      <h1 className="text-6xl font-custom-bold text-gray-800">
        Hello, {user.fname}
        <span className="ml-4" />
        {user.lname}
      </h1>
      <p className="text-base font-medium p-2">{user.position}</p>
      <div className="flex">
        <hr className="w-1/2 my-6 border-b-4 border-purple-200" />
        <p className="px-2 pt-2 text-xl font-custom-bold text-blue-400">
          Profile
        </p>
        <hr className="w-1/2 my-6 border-b-4 border-purple-200" />
      </div>
      <div className="flex flex-col  p-4 border-4 border-purple-200 overflow-auto">
        <p className="text-2xl p-2 font-custom-bold text-gray-700">
          Name:
          <span className="ml-2" />
          {user.fname}
          <span className="ml-2" />
          {user.lname}
        </p>
        <p className="text-2xl p-2 font-custom-bold text-gray-700">
          Email:
          <span className="ml-2" />
          {user.email}
        </p>
        <p className="text-2xl p-2 font-custom-bold text-gray-700">
          Age:
          <span className="ml-2" />
          {user.age}
        </p>
        <p className="text-2xl p-2 font-custom-bold text-gray-700">
          Depertment:
          <span className="ml-2" />
          {user.department}
        </p>
        <p className="text-2xl p-2 font-custom-bold text-gray-700">
          Position:
          <span className="ml-2" />
          {user.position}
        </p>
        <p className="text-2xl p-2 font-custom-bold text-gray-700">
          Salary:
          <span className="ml-2" />
          {user.salary}
        </p>
        <p className="text-2xl p-2 font-custom-bold text-gray-700">
          Phone No:
          <span className="ml-2" />
          {user.phone}
        </p>
        <p className="text-2xl p-2 font-custom-bold text-gray-700">
          Address:
          <span className="ml-2" />
          {user.address}
        </p>
        <p className="text-2xl p-2 font-custom-bold text-gray-700">
          User Type:
          <span className="ml-2" />
          {user.userType}
        </p>
      </div>
    </div>
  );
};
