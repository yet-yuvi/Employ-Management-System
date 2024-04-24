import React from "react";
import SearchIcon from "../../icons/Search.svg";

export const SearchBar = () => {
  return (
    <>
      <div className="flex h-8 w-3/4 ">
        <img src={SearchIcon} alt="" />
        <input
          type="text"
          placeholder="Type to search..."
          className="rounded-xl ring-2 ring-gray-500 bg-transparent ml-2 p-4 w-full placeholder-gray-500  text-black focus:outline-none font-medium caret-xl"
        />
      </div>
    </>
  );
};
