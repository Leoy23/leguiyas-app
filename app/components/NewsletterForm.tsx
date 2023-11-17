"use client";

import { useEffect, useState } from "react";

const NewsletterForm = () => {
  const [userEmail, setUserEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = () => {};

  return (
    <>
      <div id="newsletterForm">
        {error}
        <form>
          <label htmlFor="email" className="font-semibold mr-8">
            JOIN OUR NEWSLETTER
          </label>
          <br />
          <div className="flex justify-center relative">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="EMAIL"
              onChange={(e) => setUserEmail(e.target.value)}
              className="p-2 bg-darkPink shadow-md w-3/4 md:w-1/2 text-white focus:ring-darkerPink focus:border-darkPink focus:shadow-outline border-none form-input"
              required
            />
            <button
              onClick={handleSubmit}
              className="bg-darkerPink p-[.8rem] absolute right-6 -top-[.55px]  md:right-36 md:p-[.6rem]"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewsletterForm;
