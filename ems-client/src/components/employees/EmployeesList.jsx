import React, { useEffect } from "react";
import { Table } from "../table/Table";

export const EmployeesList = () => {
  const headers = ["SL", "Name", "Job", "Favorite Color"];
  const columns = [
    [1, "Cy Ganderton", "Quality Control Specialist", "Blue"],
    [2, "Cy Ganderton", "Quality Control Specialist", "Blue"],
    [3, "Cy Ganderton", "Quality Control Specialist", "Blue"],
    [4, "Cy Ganderton", "Quality Control Specialist", "Blue"],
  ];
  useEffect(() => {
    for (let item of columns) {
      if (true) {
        item.push({ name: "Edit", user: {} });
      }
    }
    if (true) {
      headers.push("Detail Button");
    }
  });
  return (
    <div className="w-full flex justify-center m-2">
      <Table
        headers={headers}
        columns={columns}
        banner={"Employees"}
        banner_color={"black"}
        header_color={"gray-700"}
        cell_color={"gray-300"}
        button_color={"cyan-300"}
      />
    </div>
  );
};

// const data = {
//   sl: 1,
//   name: "Cy Ganderton",
//   position: "Quality Control Specialist",
//   color: "Blue",
// }

// const arr = [];
// for (let item in data) {
//   arr.push(data[item])
// }

