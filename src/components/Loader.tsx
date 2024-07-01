import React from "react";

import Wrapper from "./Wrapper";

import { FaUserCircle } from "react-icons/fa";

const Loader = () => {
  return (
    <Wrapper>
      <div className="grid grid-cols-2 gap-4 cursor-wait">
        <FaUserCircle className=" text-slate-400 wiggleBorder border-slate-400 h-96 w-full" />
        <div className="my-auto">
          <div className="h-6 w-full bg-slate-400 rounded-md animate-pulse my-2"></div>
          <div className="h-6 w-full bg-slate-400 rounded-md animate-pulse my-2"></div>
          <div className="h-3 w-full bg-slate-400 rounded-md animate-pulse my-2"></div>
          <div className="h-3 w-[70%] bg-slate-400 rounded-md animate-pulse my-2"></div>
        </div>
        <div className="col-span-2">
          <div className="h-3 w-full bg-slate-400 rounded-md animate-pulse my-2"></div>
          <div className="h-3 w-full bg-slate-400 rounded-md animate-pulse my-2"></div>
          <div className="h-3 w-full bg-slate-400 rounded-md animate-pulse my-2"></div>
          <div className="h-3 w-[90%] bg-slate-400 rounded-md animate-pulse my-2"></div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Loader;
