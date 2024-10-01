"use client";

import React from "react";

import useSupabaseData from "@/hooks/useSupabaseData";
import LoaderSkelet from "@/components/LoaderSkelet";
import Error from "@/components/Error";
import Wrapper from "../Wrapper";
import CostumImg from "../CostumImg";
import ScrollAnimations from "../ScrollAnimations";

interface dataProps {
  id: number;
  href: string;
  src: string;
  name: string;
}

const Degree: React.FC = () => {
  const { data, loading, error } = useSupabaseData<dataProps>("degree");

  if (loading) {
    return <LoaderSkelet />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (!data) {
    return null;
  }

  return (
    <ScrollAnimations>
      <Wrapper id="degree">
        <h2>My degree / CV</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {data.map((event) => (
            <CostumImg
              key={event.id}
              src={event.src}
              alt={event.name}
              description={event.name}
              href={event.href}
            />
          ))}
        </div>
      </Wrapper>
    </ScrollAnimations>
  );
};
export default Degree;
