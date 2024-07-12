"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import useAuth from "@/hooks/useAuth";
import useSupabase from "@/hooks/useSupabaseData";

import { FaUserCircle } from "react-icons/fa";

interface ContactProps {
  id: number;
  name: string;
  company: string;
  message: string;
  created_at: string;
}

const Page: React.FC = () => {
  const {
    data: dataContact,
    loading: loadContact,
    error: errorContact,
  } = useSupabase<ContactProps>("contact");

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
      <header className="flex justify-between border border-sky-900 bg-sky-700 text-white px-2 py-1">
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
      </header>
      {loadContact && <div>Loading...!</div>}
      {errorContact && <div>Error: {errorContact}</div>}
      {dataContact && (
        <div className="max-w-3xl mx-auto">
          <h3>Messages: </h3>
          {dataContact.map((item) => (
            <div key={item.id} className="grid grid-cols-7 capitalize my-5">
              <span className="col-span-7">
                {new Date(item.created_at).toLocaleString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                })}
              </span>
              <div className="border rounded-md p-2 col-span-2 shadow-md mb-2">
                <div className="flex items-center col-span-7">
                  <FaUserCircle className="w-6 h-6 text-slate-300 bg-sky-900 rounded-full mr-1" />
                  <p>{item.name}</p>
                </div>
                <span className="text-sm rounded-full bg-sky-900 text-slate-300 px-2 py-1">{item.company}</span>
              </div>
              <p className="border rounded-md col-start-2 row-start-3 col-span-6 shadow-md p-2">{item.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
