import React, { useEffect } from "react";
import { Table } from "../table/Table";

export const EmployeesList = () => {
  const headers = ["ID", "Full name", "Email", "Age", "Depertment", "Position", "Joining Date"];
  const columns = [
    [1, "Cy Ganderton", "example@email.com", "33", "Engineering", "Software Engineer", "Novembor 29, 2023"],
    [2, "Cy Ganderton", "example@email.com", "33", "Engineering", "Software Engineer", "Novembor 29, 2023"],
    [3, "Cy Ganderton", "example@email.com", "33", "Engineering", "Software Engineer", "Novembor 29, 2023"],
    [5, "Cy Ganderton", "example@email.com", "33", "Engineering", "Software Engineer", "Novembor 29, 2023"],
    [6, "Cy Ganderton", "example@email.com", "33", "Engineering", "Software Engineer", "Novembor 29, 2023"],
    [7, "Cy Ganderton", "example@email.com", "33", "Engineering", "Software Engineer", "Novembor 29, 2023"],
    [8, "Cy Ganderton", "example@email.com", "33", "Engineering", "Software Engineer", "Novembor 29, 2023"],
    [9, "Cy Ganderton", "example@email.com", "33", "Engineering", "Software Engineer", "Novembor 29, 2023"],
    [10, "Cy Ganderton", "example@email.com", "33", "Engineering", "Software Engineer", "Novembor 29, 2023"],
    [11, "Cy Ganderton", "example@email.com", "33", "Engineering", "Software Engineer", "Novembor 29, 2023"],
    [12, "Cy Ganderton", "example@email.com", "33", "Engineering", "Software Engineer", "Novembor 29, 2023"],
  ];
  useEffect(() => {
    for (let item of columns) {
      if (true) {
        item.push({ name: "Clicl to Detail", user: {} });
      }
    }
    if (true) {
      headers.push("Detail Button");
    }
  });
  return (
    <div className="w-full flex justify-center p-10">
      <Table
        headers={headers}
        columns={columns}
        banner={"Employees"}
        banner_color={"blue-300"}
        header_color={"gray-200"}
        cell_color={"gray-100"}
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

