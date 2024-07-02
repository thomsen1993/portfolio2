"use client";

import React from "react";

import useSupabaseData from "@/hooks/useSupabaseData";
import LoaderSkelet from "../LoaderSkelet";
import Error from "@/components/Error";

import Wrapper from "../Wrapper";

interface dataProps {
  id: number;
  description: string;
  imgSrc: string;
}

const Process: React.FC = () => {
  const { data, loading, error } = useSupabaseData<dataProps>("processWork");

  if (loading) {
    return <LoaderSkelet />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <Wrapper id="process">
      {data && (
        <>
          <h2>My process</h2>
          <div className="grid grid-cols-5 gap-4">
            {data.map((item) => (
              <figure key={item.id} className="group">
                <img src={item.imgSrc} alt={item.description} className="wiggleBorder group-hover:scale-110 transition duration-300 overflow-hidden"/>
                <figcaption className="w-max bg-white rounded-md -translate-y-3 px-3 mx-auto">{item.description}</figcaption>
              </figure>
            ))}
          </div>
        </>
      )}
    </Wrapper>
  );
};
export default Process;
