import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  "/images/gallery/g4.jpg",
  "/images/gallery/g2.jpg",
  "/images/gallery/g18.jpeg",
  "/images/gallery/g3.jpeg",
  "/images/gallery/g19.jpg",
  "/images/gallery/g5.jpeg",
  "/images/gallery/g7.jpeg",
  "/images/gallery/g8.jpg",
  "/images/gallery/g11.jpeg",
  "/images/gallery/g13.jpeg",
  "/images/gallery/g16.jpeg",
  "/images/gallery/g17.jpeg",
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = images.map((img) => ({ src: img }));

  return (
    <section className="py-16 sm:py-20 bg-white">
      {/* Title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold">
          Gallery
        </h2>
        <div className="w-16 h-[2px] bg-yellow-400 mx-auto mt-3 sm:mt-4"></div>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 px-4 cursor-pointer">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-xl"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <img
              src={img}
              alt="gallery"
              loading="lazy"
              className="w-full h-40 sm:h-52 md:h-64 object-cover transition duration-500 group-hover:scale-110 active:scale-95"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
      />
    </section>
  );
};

export default Gallery;
