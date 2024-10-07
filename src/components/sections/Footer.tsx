import React from "react";

import Link from "next/link";

import Wrapper from "../Wrapper";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";

const Footer = () => {
  const SocialLinks = [
    {
      social: <FaGithub />,
      href: "https://github.com/thomsen1993",
      name: "GitHub",
      target: "_blank",
    },
    {
      social: <FaLinkedin />,
      href: "https://www.linkedin.com/in/benny-thomsen-05687127a/",
      name: "Linkedin",
      target: "_blank",
    },
    {
      social: <FaInstagram />,
      href: "https://www.instagram.com/bennythoms/",
      name: "Instagram",
      target: "_blank",
    },
    {
      social: <RiMailSendFill />,
      href: "mailto:benny.thomsen20@gmail.com",
      name: "Email",
      target: "",
    },
  ];

  return (
    <footer>
      <Wrapper id="footer">
        <div className="grid grid-cols-2 gap-4">
          {SocialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target={link.target}
              rel="noopener noreferrer"
              className="border border-accent rounded-md hover:text-accent hover:translate-x-1 hover:-translate-y-1 hover:shadow-xl active:translate-x-0 active:translate-y-0 active:shadow-none transition duration-300 py-5"
            >
              <i className="text-5xl flex justify-center ">{link.social}</i>
              <p className="text-center">{link.name}</p>
            </Link>
          ))}
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
