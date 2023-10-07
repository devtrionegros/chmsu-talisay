"use client";
import React from "react";

import Dropdown from "@/components/Reusable/Dropdown";
import usePagination from "@/components/Reusable/Hooks/usePagination";
import { Menu } from "@headlessui/react";
import {
  DeleteActiveIcon,
  MoveActiveIcon,
  DeleteInactiveIcon,
  MoveInactiveIcon,
  ArchiveActiveIcon,
  ArchiveInactiveIcon,
  EditInactiveIcon,
  EditActiveIcon,
  DuplicateInactiveIcon,
  DuplicateActiveIcon,
} from "@/components/Reusable/Svgs";
import Pagination from "@/components/Reusable/Pagination";
const tableData = [
  {
    id: 1,
    productName: "Magic Mouse 2",
    color: "Black",
    category: "Accessories",
    price: "$99",
  },
  {
    id: 2,
    productName: "Keyboard Pro",
    color: "Silver",
    category: "Accessories",
    price: "$79",
  },
  {
    id: 3,
    productName: "Laptop Stand",
    color: "Gray",
    category: "Accessories",
    price: "$49",
  },
  {
    id: 4,
    productName: "Wireless Earbuds",
    color: "White",
    category: "Audio",
    price: "$129",
  },
  {
    id: 5,
    productName: "Gaming Mouse",
    color: "RGB",
    category: "Gaming",
    price: "$59",
  },
  {
    id: 6,
    productName: "Monitor Stand",
    color: "Black",
    category: "Accessories",
    price: "$69",
  },
  {
    id: 7,
    productName: "Bluetooth Speaker",
    color: "Red",
    category: "Audio",
    price: "$79",
  },
  {
    id: 8,
    productName: "External Hard Drive",
    color: "Silver",
    category: "Storage",
    price: "$129",
  },
  {
    id: 9,
    productName: "USB-C Hub",
    color: "Space Gray",
    category: "Accessories",
    price: "$49",
  },
  {
    id: 10,
    productName: "Wireless Mouse",
    color: "Black",
    category: "Accessories",
    price: "$29",
  },
  {
    id: 11,
    productName: "Laptop Sleeve",
    color: "Blue",
    category: "Accessories",
    price: "$19",
  },
  {
    id: 12,
    productName: "Smartphone Stand",
    color: "White",
    category: "Accessories",
    price: "$9",
  },
  {
    id: 13,
    productName: "Headphones",
    color: "Black",
    category: "Audio",
    price: "$149",
  },
  {
    id: 14,
    productName: "Webcam",
    color: "Black",
    category: "Accessories",
    price: "$49",
  },
  {
    id: 15,
    productName: "Wireless Keyboard",
    color: "White",
    category: "Accessories",
    price: "$79",
  },
  {
    id: 16,
    productName: "USB Flash Drive",
    color: "Silver",
    category: "Storage",
    price: "$19",
  },
  {
    id: 17,
    productName: "Gaming Headset",
    color: "Black/Red",
    category: "Gaming",
    price: "$89",
  },
  {
    id: 18,
    productName: "Monitor",
    color: "Black",
    category: "Electronics",
    price: "$249",
  },
  {
    id: 19,
    productName: "Mouse Pad",
    color: "Blue",
    category: "Accessories",
    price: "$9",
  },
  {
    id: 20,
    productName: "USB Charger",
    color: "White",
    category: "Accessories",
    price: "$19",
  },
];
const UserTable = () => {
  const {
    currentItems,
    currentPage,
    totalPages,
    handlePageChange,
    startIndex,
    endIndex,
  } = usePagination(10, tableData);

  return (
    <div className="relative overflow-x-auto shadow-sm sm:rounded-lg p-5">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(
            ({ id, productName, color, category, price }: any) => (
              <tr
                key={id}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-table-1" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {productName}
                </th>
                <td className="px-6 py-4">{color}</td>
                <td className="px-6 py-4">{category}</td>
                <td className="px-6 py-4">{price}</td>
                <td className="px-6 py-4">
                  <Dropdown>
                    <div>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-violet-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            {active ? (
                              <EditActiveIcon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <EditInactiveIcon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                            Edit
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-violet-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            {active ? (
                              <DuplicateActiveIcon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <DuplicateInactiveIcon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                            Duplicate
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="px-1 py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-violet-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            {active ? (
                              <ArchiveActiveIcon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <ArchiveInactiveIcon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                            Archive
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-violet-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            {active ? (
                              <MoveActiveIcon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <MoveInactiveIcon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                            Move
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="px-1 py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-violet-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            {active ? (
                              <DeleteActiveIcon
                                className="mr-2 h-5 w-5 text-violet-400"
                                aria-hidden="true"
                              />
                            ) : (
                              <DeleteInactiveIcon
                                className="mr-2 h-5 w-5 text-violet-400"
                                aria-hidden="true"
                              />
                            )}
                            Delete
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Dropdown>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>

      <Pagination
        {...{
          startIndex,
          endIndex,
          tableDataLength: tableData.length,
          handlePageChange,
          currentPage,
          totalPages,
        }}
      />
    </div>
  );
};

export default UserTable;
