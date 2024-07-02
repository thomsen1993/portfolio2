"use client";

import React, { useState } from "react";

import Wrapper from "@/components/Wrapper";

import useAuth from "@/hooks/useAuth";

import { BiLoaderCircle } from "react-icons/bi";

const page: React.FC = () => {
  const { login, error, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Wrapper id="login">
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
              placeholder="'Paul'"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-md "
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
              className="rounded-md"
            />
          </div>
          <button type="submit" disabled={loading} className="colorBtn flex items-center gap-1 w-full">
            {loading && <BiLoaderCircle className="animate-spin" />}
            Log in
          </button>
          {error && <span style={{ color: "red" }}>{error}</span>}
        </form>
      </Wrapper>
    </div>
  );
};

export default page;
