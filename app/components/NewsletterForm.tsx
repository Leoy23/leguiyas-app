"use client";

import { useEffect, useState } from "react";

const NewsletterForm = () => {
  const [userEmail, setUserEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = () => {};

  return (
    <section className="w-full flex justify-center pb-4">
      <div id="newsletter_form" className="">
        {error}
        <form className="max-w-lg w-full md:max-w-xl lg:max-w-2xl xl:max-w-3xl px-4">
          <label className="label">
            <span className="label-text text-white font-semibold">
              Join our newsletter
            </span>
          </label>
          <div className="flex">
            <input
              type="email"
              placeholder="Email..."
              className="input input-bordered w-full max-w-full md:w-96 bg-darkPink"
            />
            <div>
              <button
                type="button"
                className="btn bg-darkerPink text-white border-transparent hover:bg-white hover:text-darkerPink"
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
