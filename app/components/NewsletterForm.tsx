"use client";

import { FormEvent, useRef, useState } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const form = {
      email,
    };
    console.log(form);
  };

  return (
    <section className="w-full flex justify-center pb-4">
      <div id="newsletter_form" className="">
        {error && <span>{error}</span>}
        <form className="max-w-lg w-full md:max-w-xl lg:max-w-2xl xl:max-w-3xl px-4">
          <label className="label">
            <span className="label-text text-white font-semibold">
              Join our newsletter
            </span>
          </label>
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email..."
              className="input input-bordered w-full max-w-full md:w-96 bg-darkPink"
            />
            <div>
              <button
                type="submit"
                className="btn bg-darkerPink text-white border-transparent hover:bg-white hover:text-darkerPink"
                onSubmit={handleSubmit}
              >
                GO
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsletterForm;
