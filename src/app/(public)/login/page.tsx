import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Login from "./login";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }
  return <Login />;
};

export default LoginPage;
