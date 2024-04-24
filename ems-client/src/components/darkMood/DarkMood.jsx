import React from "react";

export const DarkMood = () => {
  return (
    <>
      <div className="w-1/5">
        <label className="  items-end cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-[53px] h-7 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-toggle-false after:pl-0.5 after:pt-0.5 after:absolute after:top-[3px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[23px] after:w-[23px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-700 relative"></div>
          {/* <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span> */}
        </label>
      </div>
    </>
  );
};
