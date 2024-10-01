"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

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

  const figureRef = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLDivElement>(null);
  const flipWords = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (infoEN) {
      gsap.fromTo(
        figureRef.current,
        { y: 50 },
        { y: 0, duration: 1.5, ease: "bounce.out" }
      );
      gsap.fromTo(
        title.current,
        { x: 50 },
        { x: 0, duration: 1.5, ease: "power3.out" }
      );
      gsap.fromTo(
        flipWords.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1.5, delay: 0.3, ease: "power3.out" }
      );
    }
  }, [infoEN]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <Wrapper id="profile">
      {infoEN && (
        <div className="grid sm:grid-cols-2 items-center gap-4">
          <div className="good">
            <img
              src={infoEN[0].img}
              alt=""
              className="wiggleBorder animate-bobble h-96 w-full object-top object-cover"
            />
            <span className="text-sm border text-blue-500 border-blue-400 bg-blue-400/30 rounded-full px-2">
              {infoEN[0].job}
            </span>
          </div>
          <div>
            <div ref={title}>
              <h1 className="text-5xl font-bold">{infoEN[0].title}</h1>
              <p>{infoEN[0].subTitle}</p>
            </div>
            <div ref={flipWords}>
              <p>Favourite tools: </p>
              <div className="ml-2">
                <p>Frontend</p>
                <FlipWords
                  words={[
                    "HTML",
                    "CSS/tailwind.css",
                    "JavaScript/TypeScript",
                    "React/Next.js",
                  ]}
                />
                <p>Backend</p>
                <FlipWords words={["Node", "Express", "MongoDB", "Supabase"]} />
              </div>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default Profile;
