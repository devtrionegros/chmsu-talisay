import React from "react";
import ClearanceActions from "./Actions/ClearanceActions";
import ClearanceTable from "./ClearanceTable";

const ClearanceComponent = () => {
  return (
    <div className=" bg-white p-10 rounded-lg  lg:mx-10 lg:my-10">
      <ClearanceActions />
      <ClearanceTable />
    </div>
  );
};

export default ClearanceComponent;
