import React from "react";

interface dataProps {
  key: number;
  src: string;
  alt: string;
  description: string;
  href?: string;
}

const CostumImg: React.FC<dataProps> = ({
  src,
  alt,
  key,
  description,
  href,
}) => {
  return (
    <>
      <figure key={key} className="group relative mb-3">
        <img
          src={src}
          alt={alt}
          className="wiggleBorder transition duration-300 sm:h-full h-32 w-full overflow-hidden object-cover"
        />
        <figcaption className="w-max bg-background border border-accent rounded-md -translate-y-3 px-3 mx-auto">
          {description}
        </figcaption>
        {href && (
          <a
            href={href}
            className="absolute top-0 flex justify-center items-center w-full h-full opacity-0 group-hover:opacity-100 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bg-accent rounded-md px-5 py-2">Download file</span>
          </a>
        )}
      </figure>
    </>
  );
};

export default CostumImg;
