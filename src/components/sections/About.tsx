"use client";

import useSupabaseData from "@/hooks/useSupabaseData";
import LoaderSkelet from "@/components/LoaderSkelet";
import Error from "@/components/Error";

import ScrollAnimations from "../ScrollAnimations";

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
    <ScrollAnimations>
      <section id="about" className="max-w-3xl px-5 mt-10 mx-auto">
        {data && (
          <div>
            <h2>About me</h2>
            <div>
              <p className="text-lg mb-2">{data[0].name}</p>
              <p className="mb-2">{data[0].about}</p>
              <p>{data[0].content}</p>
            </div>
          </div>
        )}
      </section>
    </ScrollAnimations>
  );
};

export default About;
