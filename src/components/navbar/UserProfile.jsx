"use client";
import useAuth from "@/hooks/useAuth";
import { User } from "lucide-react";
import Link from "next/link";

const UserProfile = () => {
  const { user, isLoading } = useAuth();

  return (
    <>
      {isLoading ? (
        <button
          type="button"
          className="w-full flex items-center justify-center py-2 border border-red-2 text-red-2 text-sm bg-transparent hover:bg-red-2 hover:text-white"
          disabled
        >
          Loading...
        </button>
      ) : (
        <>
          {user ? (
            <Link href="/dashboard">
              <button className="w-full flex items-center justify-center py-2 border border-red-2 text-red-2 text-sm bg-transparent hover:bg-red-2 hover:text-white">
                <User className="h-5 w-5 mr-2" /> {/* Use Lucide User icon */}
                Profile
              </button>
            </Link>
          ) : (
            <Link href="/login">
              <button className="w-full py-2 border border-red-2 text-red-2 text-sm bg-transparent hover:bg-red-2 hover:text-white">
                Login
              </button>
            </Link>
          )}
        </>
      )}
    </>
  );
};

export default UserProfile;
