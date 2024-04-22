"use client";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { FormEvent, useRef, useState } from "react";
import { gsap } from "gsap";
import { getPlaneKeyframes } from "@/lib/getPlaneKeyframes";
import { getTrailsKeyframes } from "@/lib/getTrailsKeyframes";

function NewsletterForm() {
  const [input, setInput] = useState("");
  const [active, setActive] = useState(false);
  const [successMessage, setSuccessMessage] =
    useState<MembersSuccessResponse>();
  const [errorMessage, setErrorMessage] = useState("");
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { to, fromTo, set } = gsap;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = input;
    const button = buttonRef.current;

    if (!email || !button) return;

    if (!active) {
      setActive(true);

      // to gsap animation - for planes
      to(button, {
        keyframes: getPlaneKeyframes(set, fromTo, button, setActive, setInput),
      });

      //animation for the trails
      to(button, {
        keyframes: getTrailsKeyframes(button),
      });
    }

    //post to api(video @ 1:34:38) more than half way there
    const res = await fetch("/api/addSubscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (data.error) {
      setErrorMessage("Hey, you are already subscribed!");
      setSuccessMessage(undefined);
      return;
    }

    setSuccessMessage(data.res);
    setErrorMessage("");

  };
  
  console.log(errorMessage)
  return (
    <div className=" flex flex-col space-y-8 md:w-[400px]">
      <form
        className="newsletter-form mt-10 animate-fade-in-3"
        onSubmit={handleSubmit}
      >
        <div
          className="group flex items-center gap-x-4 py-1 pl-4 pr-1 rounded-[9px] 
        bg-[#090d11] hover:bg-[#15141b] shadow-outline-gray hover:shadow-transparent
         focus-within:!bg-[#15141b] transition-all duration-300"
        >
          <EnvelopeIcon
            className="hidden sm:inline w-6 h-6 text-[#4B4C52]
           group-focus-within:text-white
           group-hover:text-white transition-colors duration-300"
          />
          <input
            value={input}
            type="email"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Email address"
            required
            className=" flex-1 text-white text-sm sm:text-base outline-none placeholder:[#4b4c52] 
             group-focus-within:placeholder-white bg-transparent placeholder:transparent-colors placeholder:duration-300"
          />
          <button
            ref={buttonRef}
            disabled={!input}
            type="submit"
            className={`${active && "active"}
            disabled:!bg-[#17141F] disabled:grayscale-[65%] disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base`}
          >
            <span className="default">Subscribe</span>
            <span className="success">
              <svg viewBox="0 0 16 16">
                <polyline points="3.75 9 7 12 13 5"></polyline>
              </svg>
              Done
            </span>
            <svg className="trails" viewBox="0 0 33 64">
              <path d="M26,4 C28,13.3333333 29,22.6666667 29,32 C29,41.3333333 28,50.6666667 26,60"></path>
              <path d="M6,4 C8,13.3333333 9,22.6666667 9,32 C9,41.3333333 8,50.6666667 6,60"></path>
            </svg>
            <div className="plane">
              <div className="left"></div>
              <div className="right"></div>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewsletterForm;
