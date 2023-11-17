"use client";

import Image from "next/image";
import contactHeading from "@/public/contact-us.png";
import { useRef } from "react";

const Contact = () => {
  // const form = useRef();
  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "YOUR_SERVICE_ID",
  //       "YOUR_TEMPLATE_ID",
  //       form.current,
  //       "YOUR_PUBLIC_KEY"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  const openModal = () => {
    const dialogElement = document.getElementById("contact_form_modal");
    if (dialogElement instanceof HTMLDialogElement) {
      dialogElement.showModal();
    }
  };

  return (
    <div id="contact" className="text-center mt-8 flex flex-col items-center">
      <Image src={contactHeading} alt="contact heading" priority />
      <button
        className={"mb-4 btn bg-darkerPink text-white"}
        onClick={openModal}
      >
        Send us a message!
      </button>
      <dialog id="contact_form_modal" className="modal">
        <form
          className={
            "form-control w-full max-w-sm bg-pink px-3 py-4 rounded-lg"
          }
          // ref={form}
        >
          <div className="mb-2">
            <label className="label">
              <span className="label-text text-white">Name:</span>
            </label>
            <input
              type="text"
              placeholder="Name..."
              className="input input-bordered w-full max-w-sm bg-darkPink"
            />
          </div>
          <div className="mb-2">
            <label className="label">
              <span className="label-text text-white">Email:</span>
            </label>
            <input
              type="email"
              placeholder="Email..."
              className="input w-full max-w-sm bg-darkPink"
            />
          </div>
          <div className="mb-2">
            <label className="label">
              <span className="label-text text-white">Message:</span>
            </label>
            <textarea
              placeholder="Type your message here..."
              className="textarea textarea-bordered textarea-lg w-full max-w-sm bg-darkPink"
            ></textarea>
          </div>
          <div>
            <button className="btn bg-darkerPink text-white border-transparent hover:bg-white hover:text-darkerPink w-1/2">
              SEND
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Contact;
