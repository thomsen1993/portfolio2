"use client";

import React from "react";

import useSupabaseData from "@/hooks/useSupabaseData";
import LoaderSkelet from "@/components/LoaderSkelet";
import Error from "@/components/Error";

interface dataProps {
  id: number;
  job: string;
  about: string;
  name: string;
  content: string;
}

const About: React.FC = () => {
  const { data, loading, error } = useSupabaseData<dataProps>("infoEN");

  if (loading) {
    return <LoaderSkelet />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <section id="about" className="max-w-3xl p-5 mx-auto">
      {data && (
        <>
          <h2>About me</h2>
          <div>
            <p className="text-lg mb-2">{data[0].name}</p>
            <p className="mb-2">{data[0].about}</p>
            <p>{data[0].content}</p>
          </div>
        </>
      )}
    </section>
  );
};
export default About;
