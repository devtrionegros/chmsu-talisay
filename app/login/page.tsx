import React from "react";
import UserLoginComponent from "@/components/Login";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { UserObject } from "@/lib/type";

const LoginPage = async () => {
  const session = (await getServerSession(authOptions)) as UserObject;

  if (session !== null) {
    // redirect("/admin/users");
    console.log("from server", session.user.role.roleType);

    return redirect(`${session.user.role.roleType}/dashboard`);
  } else {
    return <UserLoginComponent />;
  }
};

export default LoginPage;
