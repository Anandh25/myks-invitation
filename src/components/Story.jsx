import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Story = () => {
  const containerRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // select ONLY timeline items
    const items = containerRef.current.querySelectorAll(".timeline-item");

    gsap.fromTo(
      items,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          // markers: true, // enable if you want debug
        },
      },
    );
  }, []);

  return (
    <section className="py-20 bg-white">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold">Our Story</h2>
        <div className="w-16 h-[2px] bg-yellow-400 mx-auto mt-4"></div>
      </div>

      {/* Timeline */}
      <div ref={containerRef} className="relative max-w-4xl mx-auto px-4">
        {/* Vertical Line */}
        <div className="absolute left-10 md:left-1/2 md:-translate-x-1/2 w-[2px] h-full bg-gray-200"></div>

        {/* Item 1 */}
        <div className="timeline-item mb-10 flex flex-col md:flex-row md:justify-start relative">
          <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-2 w-3 h-3 bg-yellow-400 rounded-full border-4 border-white"></div>
          <div className="ml-10 md:ml-0 md:w-1/2 md:pr-8 text-left md:text-right hover:scale-105 transition duration-300 cursor-pointer">
            <h3 className="text-lg sm:text-xl font-medium">
              How it all started
            </h3>
            <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
              A simple hello turned into something beautiful...
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="timeline-item mb-10 flex flex-col md:flex-row md:justify-end relative">
          <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-2 w-3 h-3 bg-yellow-400 rounded-full border-4 border-white"></div>
          <div className="ml-10 md:ml-0 md:w-1/2 md:pl-8 text-left hover:scale-105 transition duration-300 cursor-pointer">
            <h3 className="text-lg sm:text-xl font-medium">Falling in love</h3>
            <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
              From friendship to forever ❤️
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="timeline-item mb-10 flex flex-col md:flex-row md:justify-start relative">
          <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-2 w-3 h-3 bg-yellow-400 rounded-full border-4 border-white"></div>
          <div className="ml-10 md:ml-0 md:w-1/2 md:pr-8 text-left md:text-right hover:scale-105 transition duration-300 cursor-pointer">
            <h3 className="text-lg sm:text-xl font-medium">The Proposal</h3>
            <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
              A moment filled with love and promise...
            </p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="timeline-item mb-10 flex flex-col md:flex-row md:justify-end relative">
          <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-2 w-3 h-3 bg-yellow-400 rounded-full border-4 border-white"></div>
          <div className="ml-10 md:ml-0 md:w-1/2 md:pl-8 text-left hover:scale-105 transition duration-300 cursor-pointer">
            <h3 className="text-lg sm:text-xl font-medium">The Big Day</h3>
            <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
              The beginning of a new chapter together 💍
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
