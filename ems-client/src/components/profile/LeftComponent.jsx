import React, { useState } from "react";
import userProfileImage from "../../image/User-Profile-PNG.png";
export const LeftComponent = () => {
  const [dates] = useState([
    "5-1-2024",
    "9-2-2024",
    "11-4-2024",
    "14-4-2024",
    "17-5-2024",
  ]);
  return (
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
  );
};
