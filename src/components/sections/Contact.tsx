"use client";

import React, { useState } from "react";

import useSupabaseData from "@/hooks/useSupabaseData";
import Error from "@/components/Error";
import LoaderSkelet from "../LoaderSkelet";

import Wrapper from "../Wrapper";

import { IoIosSend } from "react-icons/io";
import ScrollAnimations from "../ScrollAnimations";

const Contact = () => {
  const { data, loading, error, insertData } = useSupabaseData("contact");
  const [doneMessage, setDoneMessage] = useState(false);

  if (loading) {
    return <LoaderSkelet />;
  }

  if (error) {
    return <Error error={error} />;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const formData = Object.fromEntries(fd);

    try {
      await insertData({
        name: formData.name,
        company: formData.company,
        message: formData.message,
      });

      setDoneMessage(true);
      setTimeout(() => {
        setDoneMessage(false);
      }, 3000);

      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <ScrollAnimations>
      <Wrapper id="contact">
        {data && (
          <>
            <h2 className="mb-5">Contact</h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 border border-accent rounded-md px-4 pb-5"
            >
              <p className="bg-background -translate-y-1/2 border border-accent rounded-md px-2 -mb-4">
                Let&apos;s work together, send me a message
              </p>
              <input
                type="text"
                name="name"
                id=""
                placeholder="Name"
                required
              />
              <input
                type="text"
                name="company"
                id=""
                placeholder="Company name"
                required
              />
              <textarea
                name="message"
                id=""
                rows={5}
                placeholder="Message"
                required
              ></textarea>
              <button type="submit" className="colorBtn">
                <IoIosSend />
                Send
              </button>
              {doneMessage && (
                <span className="text-green-500 bg-green-400/30 border border-green-500 rounded-md px-2 py-1 animate-pulse">
                  Message sent!
                </span>
              )}
            </form>
          </>
        )}
      </Wrapper>
    </ScrollAnimations>
  );
};

export default Contact;
