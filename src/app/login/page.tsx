"use client";

import React, { useState } from "react";
import Link from "next/link";

import useAuth from "@/hooks/useAuth";

import { BiLoaderCircle } from "react-icons/bi";

const Page: React.FC = () => {
  const { login, error, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };
  if (loading) {
    return <div className="w-screen h-screen cursor-wait bg-black/10"></div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <h2>Admin - dashboard</h2>
        <form onSubmit={handleSubmit} className="w-96 my-10">
          <div className="flex flex-col border-x border-t border-blue-400 rounded-md shadow-md mb-10">
            <label
              htmlFor="username"
              className="border border-blue-400 bg-white rounded-md w-max translate-y-1/4 -mt-[26px] mx-auto px-2 "
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="'Paul@gmail.com'"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-md border-none"
            />
          </div>
          <div className="flex flex-col border-x border-t border-blue-400 rounded-md shadow-md mb-10">
            <label
              htmlFor="password"
              className="border border-blue-400 bg-white rounded-md w-max translate-y-1/4 -mt-[26px] px-2 mx-auto"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-md border-none"
            />
          </div>
          <button type="submit" disabled={loading} className="colorBtn bg-white flex items-center gap-1 w-full">
            {loading && <BiLoaderCircle className="animate-spin" />}
            Log in
          </button>
          {error && <span style={{ color: "red" }}>{error}</span>}
        </form>
      </div>
      <Link href="/" className=" text-blue-400 hover:underline">Home page</Link>
    </div>
  );
};

export default Page;
