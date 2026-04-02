import React from "react";

const Events = () => {
  return (
    <section className="py-16 sm:py-20 bg-pink-50">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold">
          Wedding Events
        </h2>
        <div className="w-16 h-[2px] bg-yellow-400 mx-auto mt-3 sm:mt-4"></div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-4">
        <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-md transition duration-300 active:scale-95 hover:scale-105">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">
            Wedding Ceremony
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            📅 13 September 2026
          </p>
          <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
            ⏰ 06:00 AM - 07:30 AM
          </p>
          <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
            📍 Tirupur
          </p>
          <a
            href="https://www.google.com/maps/place/Tiruppur,+Tamil+Nadu/data=!4m2!3m1!1s0x3ba907b0424d75b9:0x4750551698a91687?sa=X&ved=1t:242&ictx=111"
            target="_blank"
            className="inline-block mt-3 sm:mt-4 text-yellow-500 underline text-sm sm:text-base"
          >
            View on Map
          </a>
        </div>
        <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-md transition duration-300 active:scale-95 hover:scale-105">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">
            Reception
          </h3>

          <p className="text-gray-600 text-sm sm:text-base">
            📅 12 September 2026
          </p>
          <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
            ⏰ 6:00 PM
          </p>
          <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
            📍 Tirupur
          </p>

          <a
            href="https://www.google.com/maps/place/Tiruppur,+Tamil+Nadu/data=!4m2!3m1!1s0x3ba907b0424d75b9:0x4750551698a91687?sa=X&ved=1t:242&ictx=111"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 sm:mt-4 text-yellow-500 underline text-sm sm:text-base"
          >
            View on Map
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;
