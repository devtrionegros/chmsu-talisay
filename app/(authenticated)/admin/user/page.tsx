import { Suspense } from "react";

import Loading from "../loading";
import UserComponent from "@/components/Routes/Admin/User";
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth";

const User = async() => {
  const session = await getServerSession(authOptions)
  console.log(session);
  
  return (
    <Suspense fallback={<Loading />}>
      <UserComponent />
    </Suspense>
  );
};

export default User;
