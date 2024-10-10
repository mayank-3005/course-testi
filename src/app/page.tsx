"use client";
import { useState } from "react";

const testimonials = [
  {
    id: "Testimonial 1",
    smallImage:
      "https://www.learnbay.co/_next/image?url=https%3A%2F%2Fd32and0ii3b8oy.cloudfront.net%2Fweb%2Fs3_main%2FlearnbayMain%2Firsar_pro.webp&w=384&q=75",
    banner: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/israr_big_card.webp",
  },
  {
    id: "Testimonial 3",
    smallImage:
      "https://www.learnbay.co/_next/image?url=https%3A%2F%2Fd32and0ii3b8oy.cloudfront.net%2Fweb%2Fs3_main%2FlearnbayMain%2Fshubam_pro.webp&w=640&q=75",
    banner: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/shubam_big_card.webp",
  },
  {
    id: "Testimonial 4",
    smallImage:
      "https://www.learnbay.co/_next/image?url=https%3A%2F%2Fd32and0ii3b8oy.cloudfront.net%2Fweb%2Fs3_main%2FlearnbayMain%2Fjaya_pro.webp&w=640&q=75",
    banner: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/jaya_big_card.webp",
  },
  {
    id: "Testimonial 5",
    smallImage:
      "https://www.learnbay.co/_next/image?url=https%3A%2F%2Fd32and0ii3b8oy.cloudfront.net%2Fweb%2Fs3_main%2FlearnbayMain%2Farvind_pro.webp&w=640&q=75",
    banner: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/arvind_big_card.webp",
  },
  {
    id: "Testimonial 6",
    smallImage:
      "https://www.learnbay.co/_next/image?url=https%3A%2F%2Fd32and0ii3b8oy.cloudfront.net%2Fweb%2Fs3_main%2FlearnbayMain%2Fpreksha_pro.webp&w=640&q=75",
    banner: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/preksha_big_card.webp",
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("");

  const handleNext = () => {
    setSlideDirection("right");
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % testimonials.length);
      setSlideDirection("");
    }, 300);
  };

  const handlePrev = () => {
    setSlideDirection("left");
    setTimeout(() => {
      setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
      setSlideDirection("");
    }, 300);
  };

  const handleThumbnailClick = (index) => {
    setSlideDirection(index > currentIndex ? "right" : "left");
    setTimeout(() => setCurrentIndex(index), 300);
  };

  return (
    <section className="py-10 bg-white flex justify-center items-center">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Banner with sliding effect */}
        <div className="w-full md:w-1/2 relative p-6  rounded-lg overflow-hidden">
          <div
            className={`w-full transition-transform duration-500 ease-in-out transform ${
              slideDirection === "right"
                ? "-translate-x-full"
                : slideDirection === "left"
                ? "translate-x-full"
                : "translate-x-0"
            }`}
          >
            <img
              src={testimonials[currentIndex].banner}
              alt={`Banner ${testimonials[currentIndex].id}`}
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>

        {/* Right Section with Heading and Thumbnails */}
        <div className="w-full md:w-1/2 relative flex flex-col  justify-center">
          <h2 className="text-3xl font-bold mb-2 text-gray-800 font-weight: 900; w-full md:w-3/4">Real Stories, Real Success</h2>
          <p className="text-gray-600 mb-4">Discover what our learners say about us.</p>

          <button
            onClick={handlePrev}
            className="absolute left-2 text-gray-400 hover:text-black"
          >
            &#8592;
          </button>

          <div className="flex gap-2 mb-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`w-20 h-20 rounded-md overflow-hidden border-2 ${
                  index === currentIndex
                    ? "border-orange-500"
                    : "border-gray-300 opacity-50"
                }`}
              >
                <img
                  src={testimonial.smallImage}
                  alt={`Thumbnail ${testimonial.id}`}
                  className={`object-cover w-full h-full ${
                    index === currentIndex ? "" : "grayscale"
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                />
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="absolute right-2 text-gray-400 hover:text-black"
          >
            &#8594;
          </button>

          {/* Additional Info Section */}
          <div className="flex justify-between w-full mt-6 px-4 Realstory_downcontent__jD2kh">
            <div className="text-center Realstory_contenthead__qsyYx">
              <p className="text-2xl font-bold text-orange-500">9k+</p>
              <p className="text-sm text-gray-600">Successful Career Transitions</p>
            </div>
            <div className="text-center Realstory_contenthead__qsyYx">
              <p className="text-2xl font-bold text-orange-500">175%</p>
              <p className="text-sm text-gray-600">Average Salary Hike</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;