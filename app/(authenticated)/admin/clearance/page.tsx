import React, { Suspense } from "react";
import Loading from "../loading";
import ClearanceComponent from "@/components/Routes/Admin/Clearance";

const Clearance = async () => {
  return (
    <Suspense fallback={<Loading />}>
      <ClearanceComponent />
    </Suspense>
  );
};

export default Clearance;
