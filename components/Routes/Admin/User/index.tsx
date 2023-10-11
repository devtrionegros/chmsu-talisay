import React from "react";
import UserTable from "./UserTable";
import UserActions from "./Actions/UserActions";

const UserComponent = async () => {
  return (
    <div className=" bg-white p-10 rounded-lg h-full lg:mx-10 lg:my-10 z-10">
      <UserTable />
    </div>
  );
};

export default UserComponent;