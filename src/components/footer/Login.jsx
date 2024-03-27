"use client";

import useAuth from "@/hooks/useAuth";
import Link from "next/link";

const Login = () => {
  const { user } = useAuth();
  return (
    <div>
      {!user && (
        <Link href="/login">
          <button className="mt-5 px-10 py-2 bg-red-2 text-white rounded-md text-sm active:scale-95 max-sm:hidden">
            Login
          </button>
        </Link>
      )}
    </div>
  );
};

export default Login;
