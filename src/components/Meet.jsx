import React from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

const Meet = () => {
  const groomRef = useRef();
  const brideRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      groomRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: groomRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );
    gsap.fromTo(
      brideRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: brideRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-pink-50 text-center">
      <div className="mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold">
          Meet the Couples
        </h2>
        <div className="w-16 h-[2px] bg-yellow-400 mx-auto mt-3 sm:mt-4"></div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 px-4 items-center">
        <div className="flex flex-col items-center group" ref={groomRef}>
          <img
            src="/images/gallery/g10.jpg"
            alt="groom"
            className="w-full max-w-xs sm:max-w-sm h-[280px] sm:h-[350px] md:h-[400px] object-cover rounded-xl transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold">
            Satz
          </h3>
        </div>

        <div className="flex flex-col items-center  group" ref={brideRef}>
          <img
            src="/images/gallery/g12.jpg"
            alt="bride"
            className="w-full max-w-xs sm:max-w-sm h-[280px] sm:h-[350px] md:h-[400px] object-cover rounded-xl transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold">
            Benc
          </h3>
        </div>
      </div>
      <p className="text-gray-500 text-xs sm:text-sm mt-6 sm:mt-8 italic px-4">
        From strangers to “Myks” — our little world 💫
      </p>
    </section>
  );
};

export default Meet;
