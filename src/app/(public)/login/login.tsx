"use client";

import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button onClick={() => signIn("facebook")} className="bg-blue-600 text-white px-4 py-2 rounded">
        Login with Facebook
      </button>
    </div>
  );
};

export default Login;
