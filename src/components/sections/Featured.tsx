"use client";

import React from "react";

import useSupabaseData from "@/hooks/useSupabaseData";
import Error from "@/components/Error";
import LoaderFeatured from "../LoaderFeatured";

import Wrapper from "../Wrapper";
import ScrollAnimations from "../ScrollAnimations";

interface dataProps {
  id: number;
  description: string;
  imgSrc: string;
  featured: string;
}

const Featured = () => {
  const { data, loading, error } = useSupabaseData<dataProps>("featuredWork");
  const { data: infoEN } = useSupabaseData<dataProps>("infoEN");

  if (loading) {
    return <LoaderFeatured />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <ScrollAnimations>
      <Wrapper id="featured">
        {data && (
          <>
            <h2>Featured work</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {data
                .toSorted((a, b) => a.id - b.id)
                .map((item) => (
                  <figure
                    key={item.id}
                    className="relative group overflow-hidden"
                  >
                    <img
                      src={item.imgSrc}
                      alt=""
                      className="wiggleBorder group-hover:translate-y-[-120%] transition duration-300 my-2"
                    />
                    <figcaption className="absolute bottom-[-100%] group-hover:bottom-0 transition-all duration-300 text-sm">
                      {item.description}
                    </figcaption>
                  </figure>
                ))}
            </div>
            {infoEN && <p>{infoEN[0].featured}</p>}
          </>
        )}
      </Wrapper>
    </ScrollAnimations>
  );
};
export default Featured;
