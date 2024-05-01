import React from "react";
import { Link } from "react-router-dom";

export const RightComponent = () => {
  return (
    <div className="w-1/4 h-fit bg-white p-4 shadow-lg border-4 border-gray-100 rounded-md">
      <div className="flex flex-col p-4 border-4 border-purple-200 overflow-auto">
        <h1 className="text-4xl text-center font-custom-bold text-blue-400">
          Necessary docs
        </h1>
        <hr className="my-4 border-2 border-purple-200" />
        <ul className="list-disc list-disc-3xl pl-4">
          <li className="text-lg font-custom-bold text-blue-600 py-1 cursor-pointer">
            <Link to="/home">Institutional Calender 2023</Link>
          </li>
          <li className="text-lg font-custom-bold text-blue-600 py-1 cursor-pointer">
            <Link to="/home">Rulebook</Link>
          </li>
          <li className="text-lg font-custom-bold text-blue-600 py-1 cursor-pointer">
            <Link to="/home">Application form to prior salary</Link>
          </li>
          <li className="text-lg font-custom-bold text-blue-600 py-1 cursor-pointer">
            <Link to="/home">Application for loan</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
