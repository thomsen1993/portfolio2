"use client";

import React from "react";

import useSupabaseData from "@/hooks/useSupabaseData";
import LoaderSkelet from "@/components/LoaderSkelet";
import Error from "@/components/Error";
import Wrapper from "../Wrapper";
import CostumImg from "../CostumImg";

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
    <Wrapper id="degree">
      <h2>My degree</h2>
      <a
        href="https://tenqlpcmcforcjxscaxw.supabase.co/storage/v1/object/public/pictures/Benny-CV%20(1).pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        CV
      </a>
      <div className="grid grid-cols-2 gap-5">
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
  );
};
export default Degree;
