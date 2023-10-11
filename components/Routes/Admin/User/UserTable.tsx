"use client";
import React, { useEffect, useReducer, useState } from "react";
import { Menu } from "@headlessui/react";
import {
  DeleteActiveIcon,
  ArchiveActiveIcon,
  EditActiveIcon,
  Pagination,
  usePagination,
  Dropdown,
} from "@/components/Reusable";
import { getUsers } from "@/lib/apicalls";
import { initialState, loadingReducer } from "./Hooks/useReducerUsers";
import LoadingComponent from "@/components/Reusable/Loading";
const iconClassName = {
  className: "mr-2 h-5 w-5 text-violet-400",
  "aria-hidden": true,
};

const itemsPerPage = 10;
const headers = [
  "Username",
  "Email",
  "Role",
  "Address",
  "Mobile Number",
  "Action",
];

const UserTable = () => {
  const [state, dispatch] = useReducer(loadingReducer, initialState);
  const { loading, users, totalUsers } = state;
  const {
    currentItems,
    currentPage,
    totalPages,
    handlePageChange,
    startIndex,
    endIndex,
  } = usePagination(itemsPerPage, users, totalUsers);

  useEffect(() => {
    fectchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startIndex, endIndex]);

  const fectchUsers = async () => {
    dispatch({ type: "LOADING_START" });
    const response = await fetch(
      `${getUsers}?startIndex=${startIndex}&itemsPerPage=${itemsPerPage}`
    );
    const { users, usersLength } = await response.json();
    dispatch({ type: "LOADING_END", users, totalUsers: usersLength });
  };

  const OptionIcons = [
    {
      icon: <EditActiveIcon {...iconClassName} />,
      name: "Edit",
      // click: editUser,
    },
    {
      icon: <ArchiveActiveIcon {...iconClassName} />,
      name: "Archive",
      // click: archiveUser,
    },
    {
      icon: <DeleteActiveIcon {...iconClassName} />,
      name: "Delete",
      // click: deleteUser,
    },
  ];
  if (loading) return <LoadingComponent />;
  if (!users?.length)
    return <div className="text-center">No Records Found</div>;
  return (
    <div>
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
              {headers.map((header) => (
                <th scope="col" className="px-6 py-3" key={header}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.map(({ id, username, email, role, profile }: any) => (
              <tr
                key={id}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      aria-label="checkbox"
                      id={`checkbox-table-${id}`}
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
                  {username}
                </th>
                <td className="px-6 py-4">{email}</td>
                <td className="px-6 py-4">{role}</td>
                <td className="px-6 py-4">{profile.address}</td>
                <td className="px-6 py-4">{profile.mobileNumber}</td>
                <td className="px-6 py-4">
                  <Dropdown name="Options">
                    <div>
                      {OptionIcons.map(({ icon, name }) => (
                        <Menu.Item key={name}>
                          {({ active }) => (
                            <button
                              onClick={() => console.log(123)}
                              className={`${
                                active
                                  ? "bg-violet-500 text-white"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              {icon}
                              {name}
                            </button>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        {...{
          startIndex,
          endIndex,
          tableDataLength: totalUsers,
          handlePageChange,
          currentPage,
          totalPages,
        }}
      />
    </div>
  );
};

export default UserTable;
