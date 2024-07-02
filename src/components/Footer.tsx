import React from "react";

import Link from "next/link";

import Wrapper from "./Wrapper";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";

const Footer = () => {
  const SocialLinks = [
    {
      social: <FaGithub className="mx-auto group-hover:text-white" />,
      href: "https://github.com/thomsen1993",
      name: "GitHub",
    },
    {
      social: (
        <FaLinkedin className="mx-auto group-hover:text-white" />
      ),
      href: "https://www.linkedin.com/in/benny-thomsen-05687127a/",
      name: "Linkedin",
    },
    {
      social: (
        <FaInstagram className="mx-auto group-hover:text-white" />
      ),
      href: "https://www.instagram.com/bennythoms/",
      name: "Instagram",
    },
  ];

  return (
    <footer>
      <Wrapper id="footer">
        <div className="flex sm:justify-between sm:flex-row flex-col items-center gap-4">
          {SocialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              {link.social}
              {link.name}
            </Link>
          ))}
          <Link href="mailto:benny.thomsen20@gmail.com" className="btn"><RiMailSendFill className=" mx-auto"/>Email</Link>
        </div>
        <Link href="/dashboard">Admin</Link>
      </Wrapper>
    </footer>
  );
};

export default Footer;
