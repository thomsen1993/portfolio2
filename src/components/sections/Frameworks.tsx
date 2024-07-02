"use client";

import React from "react";

import useSupabaseData from "@/hooks/useSupabaseData";
import LoaderSkelet from "@/components/LoaderSkelet";
import Error from "@/components/Error";

import { FaHtml5, FaCss3Alt, FaReact, FaNode, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill, RiSupabaseFill  } from "react-icons/ri";
import { SiNextdotjs, SiMongodb, SiTypescript } from "react-icons/si";

const Frameworks = () => {
  const { data, loading, error } = useSupabaseData("infoEN");

  if (loading) {
    return <LoaderSkelet />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <section id="about" className="overflow-hidden py-5">
      {data && (
        <>
          <h2>Frameworks</h2>
          <div className="flex justify-between w-[130%] animate-icons">
            <FaHtml5 className="icons" />
            <FaCss3Alt className="icons"/>
            <SiTypescript className="icons"/>
            <RiTailwindCssFill className="icons"/>
            <FaReact className="icons"/>
            <SiNextdotjs className="icons"/>
            <FaNode className="icons"/>
            <SiMongodb className="icons"/>
            <RiSupabaseFill className="icons"/>
            <FaGithub className="icons"/>
          </div>
        </>
      )}
    </section>
  );
};
export default Frameworks;
