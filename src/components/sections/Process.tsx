"use client";

import React from "react";

import useSupabaseData from "@/hooks/useSupabaseData";
import LoaderSkelet from "../LoaderSkelet";
import Error from "@/components/Error";

import Wrapper from "../Wrapper";
import CostumImg from "../CostumImg";
import ScrollAnimations from "../ScrollAnimations";

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
    <ScrollAnimations>
      <Wrapper id="process">
        {data && (
          <>
            <h2>My process</h2>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
              {data.map((item) => (
                <CostumImg
                  key={item.id}
                  src={item.imgSrc}
                  alt={item.description}
                  description={item.description}
                />
              ))}
            </div>
          </>
        )}
      </Wrapper>
    </ScrollAnimations>
  );
};
export default Process;
