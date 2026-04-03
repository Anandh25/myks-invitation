import React from "react";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import confetti from "canvas-confetti";

const Invitation = () => {
  const imageRef = useRef();
  const textRef = useRef();

  const sectionRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 75%", // 🔥 adjust this
      once: true, // 🔥 important
      onEnter: () => {
        confetti({
          particleCount: window.innerWidth < 768 ? 80 : 150,
          spread: 70,
          origin: { y: 0.6 },
        });
      },
    });

    return () => trigger.kill();
  }, []);
  return (
    <section className="py-16 sm:py-20 bg-pink-50 px-4" ref={sectionRef}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center">
        {/* 💛 Image */}
        <div className="flex justify-center" ref={imageRef}>
          <img
            src="/images/gallery/g9.jpeg"
            alt="couple"
            loading="lazy"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl shadow-lg"
          />
        </div>

        {/* 💌 Text */}
        <div className="text-center md:text-left" ref={textRef}>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-4 sm:mb-6">
            With Love ❤️
          </h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            With hearts full of love and happiness, we invite you to be a part
            of our special day. Your presence will make our celebration even
            more meaningful and memorable.
          </p>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-medium">
            We can’t wait to celebrate with you! ✨
          </p>

          <p className="mt-6 sm:mt-10 text-gray-500 text-xs sm:text-sm italic">
            Made with ❤️ by Satz & Benc
          </p>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
