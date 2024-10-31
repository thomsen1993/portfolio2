"use client"

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import topPicture from "../../public/cozy-designer.webp";

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

interface PopupCardProps {
  data: Event | null;
  setPopUp: React.Dispatch<React.SetStateAction<Event | null>>;
}

const PopupCard: React.FC<PopupCardProps> = ({ data, setPopUp }) => {

  const handleClosePopup = () => {
    setPopUp(null);
  };

  useEffect(() => {
    if (!data) return;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPopUp(null);
      }
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden"; // Prevent background scrolling

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = ""; // Re-enable background scrolling
    };
  }, [data, setPopUp]);

  if (!data) return null;

  return (
    <div
      className="fixed inset-0 bg-background/50 backdrop-blur-sm z-50"
      onClick={handleClosePopup}
    >
      <div
        className="flex justify-center items-center h-screen max-w-3xl mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-cardsBg rounded-md border border-accent relative py-10 px-5 sm:px-10">
          <button
            className="absolute top-0 right-0 text-sm border-b border-l border-accent rounded-bl-md rounded-tr-md transition-colors hover:text-accent p-2"
            onClick={handleClosePopup}
          >
            esc
          </button>
          <div className="relative group mb-">
            <Image
              src={data.img || topPicture}
              alt={data.title}
              width={1000}
              height={100}
              className="max-h-40 object-cover rounded-t-md"
            />
            <Link
              href={
                data.img ||
                "https://tenqlpcmcforcjxscaxw.supabase.co/storage/v1/object/public/pictures/cozy-designer.webp"
              }
              target="_blank"
              className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300"
            >
              <span className="bg-accent rounded-md px-5 py-2">View image</span>
            </Link>
            <div className="flex justify-between items-center absolute bottom-0 bg-gradient-to-b from-cardsBg/60 to-cardsBg to-90% w-full px-2 py-1">
              <div>
                <h3 className="first-letter:uppercase">{data.title}</h3>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span className="text-accent" key={i}>
                    {i < data.ranking ? "★" : "☆"}
                  </span>
                ))}
              </div>
              <p className="text-end">{data.date}</p>
            </div>
          </div>
          <div className="overflow-auto max-h-[50vh]">
            {data.info.map((event, index) => (
              <div key={index}>
                <h4>{event.title}</h4>
                <div
                  dangerouslySetInnerHTML={{
                    __html: event.text,
                  }}
                  className="listItems"
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupCard;
