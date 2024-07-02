"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import useAuth from "@/hooks/useAuth";

import { FaUserCircle } from "react-icons/fa";

import useSupabase from "@/hooks/useSupabaseData";
import Wrapper from "@/components/Wrapper";

interface contactProps {
  id: number;
  name: string;
  company: string;
  message: string;
}

const page: React.FC = () => {
  const {
    data: dataContact,
    loading: loadContact,
    error: errorContact,
  } = useSupabase<contactProps>("contact");

  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>You need to log in first</div>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <div className="flex justify-between border border-sky-900 bg-sky-700 text-white px-2 py-1">
        <div className="flex items-center gap-4">
          <FaUserCircle className="w-10 h-10" />
          <p>Welcome, {user.email}</p>
        </div>
        <button
          onClick={logout}
          className="bg-red-400 border border-red-500 text-white rounded-md hover:text-red-500 px-2"
        >
          Logout
        </button>
      </div>
      {loadContact && <div>Loading...</div>}
      {errorContact && <div>Error: {errorContact}</div>}
      {dataContact && (
        <div>
          {dataContact.map((item) => (
            <Wrapper key={item.id}>
              <div className="border-l">
                <p>{item.name}</p>
                <p>{item.company}</p>
              </div>
              <p>{item.message}</p>
            </Wrapper>
          ))}
        </div>
      )}
    </div>
  );
};

export default page;
