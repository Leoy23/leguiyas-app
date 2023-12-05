"use client";

import Image from "next/image";
import contactHeading from "@/public/contact-us.png";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

require("dotenv").config({ path: ".env.local" });

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [submitFeedback, setSubmitFeedback] = useState<{
    type: string;
    message: string;
  }>({ type: "", message: "" });

  const resetForm = () => {
    setName("");
    setEmail("");
    setMsg("");
    setSubmitFeedback({ type: "", message: "" });
  };

  const sendContactForm = () => {
    if (
      process.env.SERVICE_ID &&
      process.env.TEMPLATE_ID &&
      process.env.PUBLIC_KEY
    ) {
      emailjs
        .sendForm(
          process.env.SERVICE_ID,
          process.env.TEMPLATE_ID,
          form.current!,
          process.env.PUBLIC_KEY
        )
        .then(
          () => {
            setSubmitFeedback({
              type: "Success",
              message:
                "Message sent successfully! Please give us 48 hours to respond.",
            });
            if (form.current) {
              form.current?.reset();
              resetForm();
            }
          },
          (error: { text: string }) => {
            setSubmitFeedback({
              type: "Error",
              message: `Uh-oh! Failed to send message. See error message: ${error.text}. Please try again later.`,
            });
          }
        );
    }
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !msg) {
      setSubmitFeedback({
        type: "Error",
        message: "Please fill out all the fields!",
      });
    } else {
      sendContactForm();
    }
  };

  const openModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const dialogElement = document.getElementById("contact_form_modal");
    if (dialogElement instanceof HTMLDialogElement) {
      dialogElement.showModal();
    }
  };

  return (
    <div id="contact" className="text-center mt-8 flex flex-col items-center">
      <Image src={contactHeading} alt="contact heading" priority />
      <button
        type="button"
        className="btn bg-darkerPink text-white border-transparent hover:bg-white hover:text-darkerPink"
        onClick={openModal}
      >
        Send us a message!
      </button>
      <dialog id="contact_form_modal" className="modal">
        <form
          className={
            "form-control w-full max-w-sm bg-pink px-3 py-4 rounded-lg"
          }
          ref={form}
          onSubmit={sendEmail}
          name="contact-form"
        >
          <div className="mb-2">
            <label className="label">
              <span className="label-text text-white">Name:</span>
            </label>
            <input
              type="text"
              value={name}
              className="input input-bordered w-full max-w-sm bg-darkPink"
              onChange={(e) => {
                setName(e.target.value);
                setSubmitFeedback({ type: "", message: "" });
              }}
            />
          </div>
          <div className="mb-2">
            <label className="label">
              <span className="label-text text-white">Email:</span>
            </label>
            <input
              type="email"
              value={email}
              className="input w-full max-w-sm bg-darkPink"
              onChange={(e) => {
                setEmail(e.target.value);
                setSubmitFeedback({ type: "", message: "" });
              }}
            />
          </div>
          <div className="mb-2">
            <label className="label">
              <span className="label-text text-white">Message:</span>
            </label>
            <textarea
              className="textarea textarea-bordered textarea-lg w-full max-w-sm bg-darkPink"
              value={msg}
              onChange={(e) => {
                setMsg(e.target.value);
                setSubmitFeedback({ type: "", message: "" });
              }}
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              value="Send"
              className="btn bg-darkerPink text-white border-transparent hover:bg-white hover:text-darkerPink w-1/2"
            >
              SEND
            </button>
          </div>
          {submitFeedback && (
            <p
              className={` mt-2 ${
                submitFeedback.type === "success"
                  ? "text-success"
                  : "text-red-500"
              }`}
            >
              {submitFeedback.message}
            </p>
          )}
        </form>
      </dialog>
    </div>
  );
};

export default Contact;
