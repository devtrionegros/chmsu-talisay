import React, { useState } from "react";
import RequirementsModal from "./RequirementsComponent";

const RequirementsTable = () => {
  const [addRequirements, setAddRequirements] = useState(false);
  const [selectedRequirements, setSelectedRequirements] = useState<any>([]);

  const toogleAdd = () => {
    setAddRequirements(!addRequirements);
  };

  return (
    <div className="mt-6 flex flex-col justify-center items-center ">
      <div className="relative flex  h-[430px] w-full flex-col rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
        <div className="flex h-fit w-full items-center justify-between rounded-t-2xl bg-white px-4 pb-[20px] pt-4 shadow-2xl shadow-gray-100 dark:!bg-navy-700 dark:shadow-none">
          <h4 className="text-lg font-bold text-navy-700 dark:text-white">
            Requirements
          </h4>
          <div className="space-x-2">
            <button
              onClick={() => toogleAdd()}
              className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-blue-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20"
            >
              {!addRequirements ? "Add requirement" : "View Requirements"}
            </button>
          </div>
        </div>
        <div className="w-full h-full overflow-x-scroll px-4 md:overflow-x-hidden">
          {addRequirements && (
            <RequirementsModal
              {...{ selectedRequirements, setSelectedRequirements }}
            />
          )}
          {!addRequirements &&
            (selectedRequirements.length === 0 ? (
              <p className="flex items-center justify-center h-full">
                No requirements
              </p>
            ) : (
              <table role="table" className="w-full  overflow-x-scroll">
                <thead>
                  <tr role="row">
                    <th className="w-1/2">
                      <div className="flex items-center justify-start pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                        Name
                      </div>
                    </th>
                    <th className="w-1/2">
                      <div className="flex items-center justify-start pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                        Description
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody role="rowgroup" className="px-4">
                  {selectedRequirements.length !== 0 &&
                    selectedRequirements.map((selected: any, index: number) => (
                      <tr role="row" key={index}>
                        <td className="py-3 text-sm">
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-medium text-navy-700 dark:text-white">
                              {selected.name}
                            </p>
                          </div>
                        </td>
                        <td className="py-3 text-sm" role="cell">
                          <p className="text-md font-medium text-gray-600 dark:text-white">
                            {selected.description}
                          </p>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RequirementsTable;
