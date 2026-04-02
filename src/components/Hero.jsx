import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const titleRef = useRef();
  const subRef = useRef();
  const dateRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 80,
      },
      { opacity: 1, y: 0, duration: 1 },
    );

    gsap.fromTo(
      ".hero-bg",
      { scale: 1.1 },
      { scale: 1, duration: 2, ease: "power3.out" },
    );
    gsap.fromTo(
      subRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, delay: 0.5, duration: 1 },
    );

    gsap.fromTo(
      dateRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, delay: 1, duration: 1 },
    );
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden px-4">
      <img
        src="/images/bg7.jpg"
        alt="wedding"
        className="hero-bg absolute inset-0 w-full h-full object-cover grayscale"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center max-w-xl mx-auto">
        <TypeAnimation
          sequence={[
            "Satz ❤️ Benc",
            3000,
            "Welcome to our love story 💛",
            3000,
          ]}
          speed={50}
          repeat={Infinity}
          className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-wide leading-tight"
        />
        <p
          ref={subRef}
          className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-300"
        >
          Together with your families invite you!
        </p>
        <p
          ref={dateRef}
          className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base text-yellow-300 tracking-widest font-semibold"
        >
          13 SEPTEMBER 2026
        </p>
      </div>

      <div className="absolute bottom-6 sm:bottom-10 flex flex-col items-center text-white z-10">
        <div className="w-[1.5px] h-6 sm:h-8 bg-white animate-pulse rounded"></div>
      </div>
    </section>
  );
};

export default Hero;
