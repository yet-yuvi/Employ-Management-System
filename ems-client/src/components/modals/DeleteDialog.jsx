import React, { useContext } from "react";
import { UserContext } from "../../context";

export const DeleteDialog = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-96  bg-white p-4 shadow-lg border-4 border-gray-100 rounded-md">
      <h1 className="text-xl font-custom-bold text-gray-800 mb-4">
        Are you sure, you want to delete
        <span className="ml-2" />
        ({user.fname}
        <span className="ml-2" />
        {user.lname})
        <span className="ml-2" />
        permanently?
      </h1>

      <div className="flex flex-row gap-6 justify-center">
        <button className="text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 text-blue-400 font-custom-bold py-2 px-6 rounded-3xl">
          Cancel
        </button>
        <button className="text-lg hover:bg-red-400 hover:text-white transition-all duration-300 text-red-400 font-custom-bold py-2 px-4 rounded-3xl">
          Delete
        </button>
      </div>
    </div>
  );
};
