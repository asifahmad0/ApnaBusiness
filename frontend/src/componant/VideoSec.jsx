import { useState, useRef } from "react";
import video from '../assets/vedios/vedio2.mp4'
import videoImg from '../assets/image/videoSec.jpg'

export default function VideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <div className="w-full bg-white">
      {/* Text Section */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <span className="text-primery-dark font-semibold">IT Solutions Simplified</span>

        <h1 className="text-4xl md:text-5xl font-bold text-textColor2 leading-tight mt-3 p-2">
          Empower Your Business With{" "}
          <span className="text-primery">Smart IT Solutions</span>.
        </h1>

        <p className="text-gray-600 max-w-2xl mt-4">
          We help businesses accelerate growth with cloud integration, cybersecurity,
          custom software development, and expert IT consulting. Our team ensures
          scalable and future-ready technology solutions.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="bg-primery-dark text-textColor px-6 py-3 rounded-lg hover:bg-primery hover:text-black transition">
            Get Started
          </button>

          <button className="text-primery-dark font-medium hover:text-primery transition">
            Explore Services →
          </button>
        </div>
      </div>

      {/* Background band */}
      <div className="w-full bg-primery-dark pt-10 pb-10 relative">
        {/* Center Video Container */}
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
            onMouseEnter={handlePlay}
            onMouseLeave={handlePause}
          >
            <video
              ref={videoRef}
              src={video}
              muted
              loop
              className="w-full h-[350px] md:h-[500px] object-cover"
            />

            {/* Thumbnail (hide when playing) */}
            <img
               //src="https://cdn.pixabay.com/photo/2015/01/09/02/45/laptop-593673_1280.jpg"
              src={videoImg}
              alt="Video Thumbnail"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                isPlaying ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Play Icon (only show when paused) */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-textColor2/40 backdrop-blur-md rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-textColor"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l4.5-2.5a.5.5 0 0 0 0-.814l-4.5-2.5z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
