import React, { useState } from "react";
import Link from "next/link";
import ScrollAnimations from "../ScrollAnimations";
import useSupabaseData from "@/hooks/useSupabaseData";
import { FaGithub } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import PopupCard from "../PopupCard";

interface Icon {
  name: string;
}

interface Info {
  title: string;
  text: string;
}

interface Event {
  id: number;
  title: string;
  text: string;
  ranking: number;
  date: string;
  icon: Icon[];
  info: Info[];
  role: string;
  link: string;
  img: string;
}

const Projects = () => {
  const [popUp, setPopUp] = useState<Event | null>(null);

  const { data } = useSupabaseData<Event>("projects");

  if (!data) {
    return null;
  }

  return (
    <>
      <ScrollAnimations>
        <section id="projects" className="max-w-3xl mt-10 mx-auto grid">
          <FaGithub className="size-60 opacity-5 text-accent sticky top-1/3 left-1/2 -translate-x-1/2 col-start-1 row-start-1 -z-50" />
          <div className="col-start-1 row-start-1">
            <h2>My GitHub</h2>
            <p>Some of my projects stored on GitHub</p>
            <div>
              {data
                .sort((a, b) => a.id - b.id)
                .map((event) => (
                  <div
                    className="border-b border-accent hover:backdrop-blur-sm hover:bg-accent/10 transition-transform duration-300 px-5 py-2"
                    key={event.id}
                  >
                    <div>
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="first-letter:uppercase">
                            {event.title}
                          </h3>
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span className="text-accent" key={i}>
                              {i < event.ranking ? "★" : "☆"}
                            </span>
                          ))}
                        </div>
                        <p className="text-end">{event.date}</p>
                      </div>
                      <p className="bg-accent/10 w-max rounded-full px-3">
                        {event.role}
                      </p>
                      <p className="first-letter:uppercase">{event.text}</p>
                      <div className="flex gap-1 my-2">
                        {event.icon.map((e: Icon, i: number) => (
                          <i
                            className="border border-accent rounded-sm p-0.5"
                            key={i}
                          >
                            {e.name === "next" && <SiNextdotjs />}
                            {e.name === "javascript" && <SiJavascript />}
                            {e.name === "typescript" && <SiTypescript />}
                            {e.name === "mongo" && <SiMongodb />}
                            {e.name === "supabase" && <RiSupabaseFill />}
                          </i>
                        ))}
                      </div>
                      <div className="flex items-end justify-center gap-5">
                        <button
                          onClick={() => setPopUp(event)}
                          className="colorBtn"
                        >
                          Read more
                        </button>
                        <Link
                          href={event.link}
                          className="underline hover:text-accent transition-colors duration-300 py-1"
                        >
                          Code on GitHub
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </ScrollAnimations>
      {popUp && <PopupCard data={popUp} setPopUp={setPopUp} />}
    </>
  );
};

export default Projects;
