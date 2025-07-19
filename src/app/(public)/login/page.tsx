import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import Login from "./login";

const LoginPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }
  return <Login />;
};

export default LoginPage;
