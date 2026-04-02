import React, { useState } from "react";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Meet from "./components/Meet";
import { useRef, useEffect } from "react";
import Invitation from "./components/Invitation";
import { FaPlay, FaPause, FaArrowUp } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

const App = () => {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white text-2xl">
        Loading 💛
      </div>
    );
  }

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div>
      <audio ref={audioRef} loop>
        <source src="/music/audio1.mpeg" type="audio/mpeg" />
      </audio>

      <button
        className="fixed bottom-5 left-5 z-50 bg-black text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition duration-300 cursor-pointer  flex items-center gap-2"
        onClick={toggleMusic}
      >
        <span className={`${isPlaying ? "slow-spin" : "animate-bounce"}`}>
          🎵
        </span>
        {isPlaying ? <FaPause /> : <FaPlay />}

        <div className="flex items-end gap-[2px] h-4">
          <span className={`wave ${isPlaying ? "active" : ""}`}></span>
          <span className={`wave ${isPlaying ? "active delay-1" : ""}`}></span>
          <span className={`wave ${isPlaying ? "active delay-2" : ""}`}></span>
        </div>
      </button>

      <Hero />
      <Meet />
      <Story />
      <Events />
      <Gallery />
      <Invitation />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 bg-black text-white px-4 py-2 rounded-full shadow-lg hover:cursor-pointer hover:scale-105 transition duration-300"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default App;
