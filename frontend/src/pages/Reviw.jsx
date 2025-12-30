import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import user6 from "../assets/image/user6.jpg";

export default function ReviewSection() {
  const [ReviewData, setReviewData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const reviewsPerPage = 3;
  const totalPages = Math.ceil(ReviewData.length / reviewsPerPage) || 1;

  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out-cubic" });
    getReviewData();
  }, []);


  const getReviewData = async () => {
    try {
      const response = await axios.get(
       import.meta.env.VITE_REVIEWDATA_API+'businessr/getbreview'
      );
      setReviewData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  // Auto-play pagination
  useEffect(() => {
    if (totalPages <= 1) return;

    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev === totalPages ? 1 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [totalPages]);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 1 ? totalPages : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages ? 1 : prev + 1));
  };

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = ReviewData.slice(
    indexOfFirstReview,
    indexOfLastReview
  );

  return (
    <section className="bg-bg1 text-textColor py-20 px-6">
      {/* Title */}
      <div data-aos="fade-up" className="text-center mb-14">
        <h2 className="text-4xl font-bold p-2 text-textColor2">
          What Our <span className="text-primery">Clients Say</span>
        </h2>
        <p className="text-gray-300 mt-3">
          Trusted by businesses across the globe.
        </p>
      </div>

      {/* Review Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 p-2">
        {currentReviews.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 150}
            className="relative p-6 rounded-xl bg-primery border border-primery-dark shadow-lg
                       hover:scale-105 transition-transform duration-300"
          >
            <div className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-br from-primery to-primery-dark opacity-40 blur-md"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={user6}
                  alt={item.uname}
                  className="w-14 h-14 rounded-full border-2 border-primery"
                />
                <div>
                  <h3 className="font-semibold text-lg">{item.uname}</h3>
                  <p className="text-sm text-gray-300">{item.uemail}</p>
                </div>
              </div>
              <p className="text-gray-200">{item.ureview}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 gap-4">
        <button
          onClick={handlePrev}
          className="px-5 py-2 rounded bg-white text-textColor hover:bg-primery"
        >
          ← Previous
        </button>
        <button
          onClick={handleNext}
          className="px-5 py-2 rounded bg-primery text-black hover:bg-white"
        >
          Next →
        </button>
      </div>
    </section>
  );
}
