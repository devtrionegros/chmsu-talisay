import { Suspense } from "react";

import Loading from "../loading";
import UserComponent from "@/components/Routes/Admin/User";

const User = () => {
  return (
    <Suspense fallback={<Loading />}>
      <UserComponent />
    </Suspense>
  );
};

export default User;
