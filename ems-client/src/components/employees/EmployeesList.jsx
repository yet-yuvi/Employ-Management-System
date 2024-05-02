import React from "react";
import { Table } from "../table/Table";

export const EmployeesList = () => {
  const headers = ["SL", "Name", "Job", "Favorite Color"];
  const columns = [
    [1, "Cy Ganderton", "Quality Control Specialist", "Blue", {name: "Edit", user: {}}],
    [2, "Cy Ganderton", "Quality Control Specialist", "Blue"],
    [3, "Cy Ganderton", "Quality Control Specialist", "Blue"],
    [4, "Cy Ganderton", "Quality Control Specialist", "Blue"],
  ];
  return (
    <div>
      <Table headers={headers} columns={columns} />
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