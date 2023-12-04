import React from "react";

const TableLoader = () => {
  return (
    <>
      <div className="border border-gray-200 rounded-md overflow-hidden mt-10 animate-pulse">
        <div className="bg-gray-50 border-b border-gray-200 p-4 ">
          {/* Table Headers */}
          <div className="grid grid-cols-3 gap-4">
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-200">
          {Array.from({ length: 10 }, (_, idx) => (
            <div className="p-4" key={idx}>
              <div className="flex-1 h-8 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <div className="w-20 h-8 bg-gray-200 rounded-sm " />
        <div className="w-32 h-8 bg-gray-200 rounded-sm " />
      </div>
    </>
  );
};

export default TableLoader;
