import React, { useContext } from "react";
import { UserContext } from "../../context";

export const UserDetailDialog = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-full  bg-white p-4 shadow-lg border-4 border-gray-100 rounded-md z-50">
      <h1 className="text-4xl font-custom-bold text-gray-800">
        {user.fname}
        <span className="ml-4" />
        {user.lname}
        {user.userType ? `(${user.userType})` : ""}
      </h1>

      <div className="flex">
        <hr className="w-1/2 my-6 border-b-4 border-purple-200" />
        <p className="px-2 pt-2 text-lg font-custom-bold text-blue-400">
          Details
        </p>
        <hr className="w-1/2 my-6 border-b-4 border-purple-200" />
      </div>

      <div className="flex flex-col  p-4 border-4 border-purple-200 overflow-auto">
        <p className="text-xl p-2 font-custom-bold text-gray-700">
          Name:
          <span className="ml-2" />
          {user.fname}
          <span className="ml-2" />
          {user.lname}
        </p>
        <p className="text-xl p-2 font-custom-bold text-gray-700">
          Email:
          <span className="ml-2" />
          {user.email}
        </p>
        <p className="text-xl p-2 font-custom-bold text-gray-700">
          Age:
          <span className="ml-2" />
          {user.age}
        </p>
        <p className="text-xl p-2 font-custom-bold text-gray-700">
          Depertment:
          <span className="ml-2" />
          {user.department}
        </p>
        <p className="text-xl p-2 font-custom-bold text-gray-700">
          Position:
          <span className="ml-2" />
          {user.position}
        </p>
        <p className="text-xl p-2 font-custom-bold text-gray-700">
          Salary:
          <span className="ml-2" />
          {user.salary}
        </p>
        <p className="text-xl p-2 font-custom-bold text-gray-700">
          Phone No:
          <span className="ml-2" />
          {user.phone}
        </p>
        <p className="text-xl p-2 font-custom-bold text-gray-700">
          Address:
          <span className="ml-2" />
          {user.address}
        </p>
        <p className="text-xl p-2 font-custom-bold text-gray-700">
          User Type:
          <span className="ml-2" />
          {user.userType}
        </p>
        <div className="flex flex-row gap-6 justify-center">
            <button className="text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 text-blue-400 font-custom-bold py-2 px-6 rounded-3xl">Edit</button>
            <button className="text-lg hover:bg-red-400 hover:text-white transition-all duration-300 text-red-400 font-custom-bold py-2 px-4 rounded-3xl">Delete</button>
        </div>
      </div>
      <button className="ml-64 mt-4 text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 text-blue-400 font-custom-bold py-2 px-4 rounded-2xl">Cancel</button>
    </div>
  );
};
