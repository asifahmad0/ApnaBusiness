import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'
import video1 from '../assets/vedios/civilSector.mp4'
import video2 from '../assets/vedios/fasionSector.mp4'
import video3 from '../assets/vedios/foodSector.mp4'
import video4 from '../assets/vedios/helthSector.mp4'
import video5 from '../assets/vedios/security.mp4'
import video6 from '../assets/vedios/media.mp4'


import travlingImg from '../assets/image/travling.jpg'
import fasionImg from '../assets/image/fasion1.jpg'
import deliveryImg from '../assets/image/delivery.jpg'
import helthImg from '../assets/image/helth.jpg'
import cybreSequrity from '../assets/image/cyberSecurity.jpg'
import mediaImg from '../assets/image/media.jpg'

const videos = [
  {
    id: 1,
    src: video1,
    thumbnail:travlingImg,
  },
  {
    id: 2,
    src: video2,
    thumbnail: fasionImg,
  },
  {
    id: 3,
    src: video3,
    thumbnail: deliveryImg,
  },
  {
    id: 4,
    src: video4,
    thumbnail: helthImg,
  },
  {
    id: 5,
    src: video5,
    thumbnail: cybreSequrity,
  },
  {
    id: 6,
    src: video6,
    thumbnail: mediaImg,
  },
];

export default function ProjectsSection() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#292525] py-16 px-4 md:px-10">
      <h1
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#adff2f] p-3"
        data-aos="fade-down ">
        We Are In All Field
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-2">
        {videos.map((video) => (
          <HoverVideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}

function HoverVideoCard({ video }) {
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
    <div
      data-aos="fade-up"
      className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group
                 border-2 border-[#3c580b] hover:border-[#adff2f]
                 transition-all duration-300"
      onMouseEnter={handlePlay}
      onMouseLeave={handlePause}
    >
      {/* VIDEO */}
      <video
        ref={videoRef}
        src={video.src}
        muted
        loop
        className="w-full h-60 object-cover"
      />

      {/* THUMBNAIL OVERLAY (HIDES WHEN PLAYING) */}
      <img
        src={video.thumbnail}
        alt="thumbnail"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300
          ${isPlaying ? "opacity-0" : "opacity-100"}
        `}
      />

      {/* OPTIONAL: HOVER TEXT */}
      {!isPlaying && (
        <div
          className="absolute inset-0 bg-black/40 flex items-center justify-center
                     text-white text-xl opacity-0 group-hover:opacity-100
                     transition-opacity duration-300"
        >
          Hover to Play
        </div>
      )}
    </div>
  );
}