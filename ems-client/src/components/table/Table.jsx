import React, { useEffect, useState } from "react";

export const Table = (props) => {
//   const headers = ["", "Name", "Job", "Favorite Color"];
//   const columns = [
//     [1, "Cy Ganderton", "Quality Control Specialist", "Blue"],
//     [2, "Cy Ganderton", "Quality Control Specialist", "Blue"],
//     [3, "Cy Ganderton", "Quality Control Specialist", "Blue"],
//     [4, "Cy Ganderton", "Quality Control Specialist", "Blue"],
//   ];
    const [headers, setHeaders] = useState([]);
    const [columns, setColumns] = useState([]);
    useEffect(() => {
        setHeaders(props.headers);
        setColumns(props.columns);
    },[props])
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="border-2 border-black bg-black text-white">
              {headers.map((head, idx) => {
                return <th key={idx} className="p-4 border-r border-cyan-200">{head}</th>;
              })}
            </tr>
          </thead>
          <tbody className="border-2 border-black">
            {columns.map((column, idx) => {
              return (
                <tr key={idx} className="border border-black-200 bg-gray-300">
                  {column.map((col, colIdx) => {
                    return (
                      <td key={colIdx} className="p-4 border border-gray-900">{typeof col != "object" ? col : (<button className="bg-cyan-300 ring-2 p-1">{col.name}</button>)}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
