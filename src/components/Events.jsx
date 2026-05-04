import React from "react";

const Events = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-pink-50 to-white">
      {/* Section Title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-wide">
          Wedding Events
        </h2>
        <div className="w-16 h-[2px] bg-yellow-400 mx-auto mt-3 sm:mt-4"></div>
      </div>

      {/* Events Container */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* Christian Wedding */}
        <div
          className="bg-white/80 p-6 md:p-10 rounded-lg border border-gray-200 text-center
          transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
        >
          <h3 className="text-xl md:text-2xl font-semibold tracking-wide">
            ✝️ Christian Wedding
          </h3>

          <div className="w-10 h-[2px] bg-yellow-400 mx-auto mt-2 mb-4"></div>

          <p className="text-gray-700 mt-3">📅 13 September 2026</p>
          <p className="text-gray-700 mt-2">⏰ 06:00 AM – 07:30 AM</p>

          <p className="text-gray-500 text-sm mt-2">📍 Church, Coimbatore</p>

          <p className="text-gray-500 text-sm italic mt-3">
            Holy Matrimony Ceremony & Blessings
          </p>

          <a
            href="https://www.google.com/maps/place/Tiruppur,+Tamil+Nadu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-yellow-600 text-sm underline"
          >
            View on Map
          </a>
        </div>

        {/* Hindu Wedding */}
        <div
          className="bg-white/80 p-6 md:p-10 rounded-lg border border-gray-200 text-center
          transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
        >
          <h3 className="text-xl md:text-2xl font-semibold tracking-wide">
            🕉️ Hindu Wedding
          </h3>

          <div className="w-10 h-[2px] bg-yellow-400 mx-auto mt-2 mb-4"></div>

          <p className="text-gray-700 mt-3">📅 16 September 2026</p>
          <p className="text-gray-700 mt-2">⏰ Muhurtham: 06:30 AM</p>

          <p className="text-gray-500 text-sm mt-2">📍 Temple, Trichy</p>

          <p className="text-gray-500 text-sm italic mt-3">
            Traditional Rituals, Mangalsutra & Sapthapadi
          </p>

          <a
            href="https://maps.app.goo.gl/4vngJvX4RiNmmoh18"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-yellow-600 text-sm underline"
          >
            View on Map
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;
