import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import user1 from '../assets/image/user1.jpg'
import user2 from '../assets/image/user2.jpg'
import user3 from '../assets/image/user3.jpg'
import user4 from '../assets/image/user4.jpg'
import user5 from '../assets/image/user5.jpg'
import user6 from '../assets/image/user6.jpg'

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Product Manager, NovaTech",
    review:
      "Their team delivered beyond expectations. The communication and expertise were outstanding!",
    image: user6,
  },
  {
    name: "Omar Williams",
    role: "CEO, CloudEdge",
    review:
      "Incredible service! They built a scalable infrastructure for us with great attention to detail.",
    image: user6,
  },
  {
    name: "Emily Carter",
    role: "CTO, PixelSoft",
    review:
      "Reliable, fast, and professional. Easily the best IT partner we've worked with.",
    image: user6,
  },
  {
    name: "John Doe",
    role: "Founder, StartupX",
    review: "Absolutely fantastic support and delivery. Highly recommend!",
    image: user6,
  },
  {
    name: "Anna Smith",
    role: "Manager, DesignCo",
    review: "Creative solutions with great execution. Truly impressed!",
    image: user6,
  },
];

export default function ReviewSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out-cubic" });
    AOS.refresh();
  }, []);

  // Auto-play logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev === totalPages ? 1 : prev + 1));
    }, 5000); // change page every 5 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [totalPages]);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 1 ? totalPages : prev - 1));
   // window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages ? 1 : prev + 1));
   // window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  return (
    <section className="bg-[#292525] text-white py-20 px-6">
      {/* Title */}
      <div data-aos="fade-up" className="text-center mb-14">
        <h2 className="text-4xl font-bold p-2">
          What Our <span className="text-[#adff2f]">Clients Say</span>
        </h2>
        <p className="text-gray-300 mt-3">
          Trusted by businesses across the globe.
        </p>
      </div>

      {/* Review Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 p-2">
        {currentReviews.map((r, i) => (
          <div
            key={indexOfFirstReview + i}
            data-aos="zoom-in"
            data-aos-delay={i * 150}
            className="relative p-6 rounded-xl bg-[#3c580b]/20 border border-[#3c580b] shadow-lg
                       hover:scale-105 transition-transform duration-300"
          >
            <div className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-br from-[#adff2f] to-[#3c580b] opacity-40 blur-md"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={r.image}
                  alt={r.name}
                  className="w-14 h-14 rounded-full border-2 border-[#adff2f]"
                />
                <div>
                  <h3 className="font-semibold text-lg">{r.name}</h3>
                  <p className="text-sm text-gray-300">{r.role}</p>
                </div>
              </div>
              <p className="text-gray-200">{r.review}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrow Pagination */}
      <div className="flex justify-center mt-10 gap-4">
        <button
          type="button"
          onClick={handlePrev}
          className="px-5 py-2 rounded bg-gray-700 text-white hover:bg-gray-600"
        >
          &larr; Previous
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="px-5 py-2 rounded bg-[#adff2f] text-black hover:bg-lime-400"
        >
          Next &rarr;
        </button>
      </div>
    </section>
  );
}
