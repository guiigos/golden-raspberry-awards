import React from "react";

interface Title {
  key: string;
  value: string;
}

interface Filter {
  key: string;
  element: React.ReactElement;
}

interface Props {
  filters?: Filter[];
  title?: Title[];
  data?: any[];
}

const Table: React.FC<Props> = ({ filters, title, data }): React.ReactElement => {
  if (!data) {
    return (
      <div className="flex justify-center items-center" data-testid="test-loading">
        <div className="animate-spin rounded-full h-5 w-5 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (!data.length) {
    return (
      <div className="flex items-center justify-center" data-testid="test-empty">
        <p className="text-gray-500">No data available</p>
      </div>
    );
  }

  return (
    <table className="w-full">
      <thead>
        <tr>
          {title?.map(({ key, value }) => (
            <th key={key} className="border border-gray-400 bg-gray-100 text-left px-5">
              <div className="flex flex-col">
                {value}
                {filters && filters.filter((e) => e.key === key)[0]?.element}
              </div>
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data?.map((item, index) => (
          <tr key={index}>
            {title?.map(({ key }) => {
              const value: string = typeof item[key] === "boolean" ? (item[key] ? "Yes" : "No") : item[key];

              return (
                <td key={key} className={`border pl-5 border-gray-400 text-gray-600 w-1/4 ${index % 2 === 0 ? "" : "bg-gray-100"}`}>{value}</td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
