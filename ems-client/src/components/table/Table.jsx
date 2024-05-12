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
  const [banner, setBanner] = useState(false);
  useEffect(() => {
    setHeaders(props.headers);
    setColumns(props.columns);
    if (props.banner) {
      setBanner(props.banner);
    }
  }, [props]);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            {banner && (
              <tr
                className={`border-2 border-blue-300 bg-${props.banner_color} text-white`}
              >
                <th className="p-4 " colSpan={headers.length}>{banner}</th>
              </tr>
            )}
            <tr className={`border-2 border-gray-300 bg-${props.header_color} text-gray-700`}>
              {headers.map((head, idx) => {
                return (
                  <th key={idx} className="p-4 border-r-2 border-gray-300">
                    {head}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="border-2 border-gray-300 font-custom-bold text-gray-700">
            {columns.map((column, idx) => {
              return (
                <tr key={idx} className={`border-2 border-gray-300 bg-${props.cell_color}`}>
                  {column.map((col, colIdx) => {
                    return (
                      <td key={colIdx} className="p-4 border-2 border-gray-300">
                        {typeof col != "object" ? (
                          col
                        ) : (
                          <button className={`hover:bg-${props.button_color} ring-2 p-1`}>
                            {col.name}
                          </button>
                        )}
                      </td>
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
