"use client";

import React from "react";

import useSupabaseData from "@/hooks/useSupabaseData";
import Loader from "@/components/Loader";
import Error from "@/components/Error";

import Wrapper from "../Wrapper";
import { FlipWords } from "../ui/flip-words";

interface InfoEN {
  id: number;
  title: string;
  subTitle: string;
  job: string;
  content: string;
  img: string;
}

const Profile: React.FC = () => {
  const { data: infoEN, loading, error } = useSupabaseData<InfoEN>("infoEN");

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <Wrapper id="profile">
      {infoEN && (
        <>
          <div className="grid grid-cols-2 items-center gap-4">
            <figure>
              <img
                src={infoEN[0].img}
                alt=""
                className="wiggleBorder animate-bobble h-96 w-full object-top object-cover "
              />
              <span className="text-sm border text-blue-500 border-blue-400 bg-blue-400/30 rounded-full px-2">
                {infoEN[0].job}
              </span>
            </figure>
            <div className="">
              <h1 className="text-5xl font-bold">{infoEN[0].title}</h1>
              <p className="">{infoEN[0].subTitle}</p>
              <div>
                <p>Favourite tools: </p>
                <div className="ml-2">
                  <p>Frontend</p>
                  <FlipWords
                    words={[
                      "HTML",
                      "CSS/tailwing.css",
                      "JavaScript/TypeScript",
                      "React/Next.js",
                    ]}
                  />
                  <p>Backend</p>
                  <FlipWords
                    words={["Node", "Express", "MongoDB", "Supabase"]}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Wrapper>
  );
};
export default Profile;
