import React, { useEffect } from "react";
import { Table } from "../table/Table";

export const EmployeesList = () => {
  const headers = ["ID", "Full name", "Email", "Age", "Depertment", "Position", "Joining Date"];
  const columns = [
    [1, "Cy Ganderton1", "example@email.com", "33", "Engineering", "Software Engineer", "Novembor 29, 2023"],
    [2, "Cy Ganderton2", "example@email.com", "33", "Engineering", "Software Engineer", "Novembor 29, 2023"],
    [3, "Cy Ganderton3", "example@email.com", "33", "Engineering", "Software Engineer", "Novembor 29, 2023"],
    [4, "Cy Ganderton4", "example@email.com", "33", "Engineering", "Software Engineer", "Novembor 29, 2023"],
    [5, "Cy Ganderton5", "example@email.com", "33", "Engineering", "Software Engineer", "Novembor 29, 2023"],
    [6, "Cy Ganderton6", "example@email.com", "33", "Engineering", "Software Engineer", "Novembor 29, 2023"],
    [7, "Cy Ganderton7", "example@email.com", "33", "Engineering", "Software Engineer", "Novembor 29, 2023"],
    [8, "Cy Ganderton8", "example@email.com", "33", "Engineering", "Software Engineer", "Novembor 29, 2023"],
    [9, "Cy Ganderton9", "example@email.com", "33", "Engineering", "Software Engineer", "Novembor 29, 2023"],
    [10, "Cy Ganderton10", "example@email.com", "33", "Engineering", "Software Engineer", "Novembor 29, 2023"],
    [11, "Cy Ganderton11", "example@email.com", "33", "Engineering", "Software Engineer", "Novembor 29, 2023"],
    [12, "Cy Ganderton12", "example@email.com", "33", "Engineering", "Software Engineer", "Novembor 29, 2023"],
    [13, "Cy Ganderton13", "example@email.com", "33", "Engineering", "Software Engineer", "Novembor 29, 2023"],
    [14, "Cy Ganderton14", "example@email.com", "33", "Engineering", "Software Engineer", "Novembor 29, 2023"],
    [15, "Cy Ganderton15", "example@email.com", "33", "Engineering", "Software Engineer", "Novembor 29, 2023"],
    [16, "Cy Ganderton16", "example@email.com", "33", "Engineering", "Software Engineer", "Novembor 29, 2023"],
    [17, "Cy Ganderton17", "example@email.com", "33", "Engineering", "Software Engineer", "Novembor 29, 2023"],
    [18, "Cy Ganderton18", "example@email.com", "33", "Engineering", "Software Engineer", "Novembor 29, 2023"],
    [19, "Cy Ganderton19", "example@email.com", "33", "Engineering", "Software Engineer", "Novembor 29, 2023"],
    [20, "Cy Ganderton20", "example@email.com", "33", "Engineering", "Software Engineer", "Novembor 29, 2023"],
    [21, "Cy Ganderton21", "example@email.com", "33", "Engineering", "Software Engineer", "Novembor 29, 2023"],
    [22, "Cy Ganderton22", "example@email.com", "33", "Engineering", "Software Engineer", "Novembor 29, 2023"],
  ];
  useEffect(() => {
    for (let item of columns) {
      if (true) {         // TODO: APPLY ADMIN CHECKING
        item.push({ name: "Click for Details", user: item });
      }
    }
    if (true) {           // TODO: THE SAME LOGIC ON LINE 32
      headers.push("Detail Button");
    }
  });
  return (
    <div className="w-full flex justify-center p-10">
      <Table
        headers={headers}
        columns={columns}
        banner="Employees"
        banner_color="bg-blue-300"
        header_color="bg-gray-200"
        cell_color="bg-gray-100"
        button_behavior="hover:bg-cyan-300"
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

