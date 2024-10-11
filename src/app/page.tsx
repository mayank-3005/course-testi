"use client";
import { useState } from "react";

const testimonials = [
  {
    id: "Testimonial 1",
    name: "Jaya Sinha",
    role: "Data Scientist",
    description: "Transitioning from a non-tech role, LearnBay's IBM data science certification equipped me with the skills needed in today's market. The course's interactive sessions and personalized guidance from Abhishek sir were invaluable.",
    smallImage: "https://www.learnbay.co/_next/image?url=https%3A%2F%2Fd32and0ii3b8oy.cloudfront.net%2Fweb%2Fs3_main%2FlearnbayMain%2Fjaya_pro.webp&w=640&q=75",
    banner: "https://www.learnbay.co/_next/image?url=https%3A%2F%2Fd32and0ii3b8oy.cloudfront.net%2Fweb%2Fs3_main%2FlearnbayMain%2Fjaya_pro.webp&w=640&q=75",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    hike: "150% Hike"
  },
  {
    id: "Testimonial 2",
    name: "Shubham Kumar",
    role: "Software Engineer",
    description: "The course helped me transition smoothly into a tech role. The projects and mentorship were top-notch.",
    smallImage: "https://www.learnbay.co/_next/image?url=https%3A%2F%2Fd32and0ii3b8oy.cloudfront.net%2Fweb%2Fs3_main%2FlearnbayMain%2Fshubam_pro.webp&w=640&q=75",
    banner: "https://www.learnbay.co/_next/image?url=https%3A%2F%2Fd32and0ii3b8oy.cloudfront.net%2Fweb%2Fs3_main%2FlearnbayMain%2Fshubam_pro.webp&w=640&q=75",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    hike: "120% Hike"
  },
  {
    id: "Testimonial 3",
    name: "Mohammad Israr",
    role: "Data Scientist",
    description: "Thanks to the Learnbay data science course and outstanding assistance, I could ace the TCS interview and secure a job with a 210% pay hike.",
    smallImage: "https://www.learnbay.co/_next/image?url=https%3A%2F%2Fd32and0ii3b8oy.cloudfront.net%2Fweb%2Fs3_main%2FlearnbayMain%2Firsar_pro.webp&w=640&q=75",
    banner: "https://www.learnbay.co/_next/image?url=https%3A%2F%2Fd32and0ii3b8oy.cloudfront.net%2Fweb%2Fs3_main%2FlearnbayMain%2Firsar_pro.webp&w=640&q=75",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    hike: "210% Hike"
  },
  {
    id: "Testimonial 4",
    name: "Arvind Kumar",
    role: "Product Manager",
    description: "Learnbay's course was instrumental in my career growth. The real-time projects were particularly beneficial.",
    smallImage: "https://www.learnbay.co/_next/image?url=https%3A%2F%2Fd32and0ii3b8oy.cloudfront.net%2Fweb%2Fs3_main%2FlearnbayMain%2Farvind_pro.webp&w=640&q=75",
    banner: "https://www.learnbay.co/_next/image?url=https%3A%2F%2Fd32and0ii3b8oy.cloudfront.net%2Fweb%2Fs3_main%2FlearnbayMain%2Farvind_pro.webp&w=640&q=75",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    hike: "180% Hike"
  },
  {
    id: "Testimonial 5",
    name: "Preksha Jain",
    role: "AI Specialist",
    description: "The AI specialization course was comprehensive and well-structured. It gave me the confidence to excel in my field.",
    smallImage: "https://www.learnbay.co/_next/image?url=https%3A%2F%2Fd32and0ii3b8oy.cloudfront.net%2Fweb%2Fs3_main%2FlearnbayMain%2Fpreksha_pro.webp&w=640&q=75",
    banner: "https://www.learnbay.co/_next/image?url=https%3A%2F%2Fd32and0ii3b8oy.cloudfront.net%2Fweb%2Fs3_main%2FlearnbayMain%2Fpreksha_pro.webp&w=640&q=75",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    hike: "200% Hike"
  },
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
        <div className="w-full md:w-1/2 relative p-6 rounded-lg overflow-hidden">
          <div
            className={`w-full transition-transform duration-500 ease-in-out transform ${
              slideDirection === "right"
                ? "-translate-x-full"
                : slideDirection === "left"
                ? "translate-x-full"
                : "translate-x-0"
            }`}
          >
            <div className="max-w-lg p-4 card-bg rounded-lg text-white">
              <div className='flex justify-end'>
                <button className="bg-green-500 text-white text-end px-2 py-1 rounded-md text-sm">
                  {testimonials[currentIndex].hike}
                </button>
              </div>
              <div className="flex items-center mb-4">
                <div className="rounded-md bg-slate-100 h-44 min-w-32">
                  <img
                    src={testimonials[currentIndex].banner}
                    alt={`Banner ${testimonials[currentIndex].id}`}
                    className="w-full h-40 rounded-md object-cover"
                  />
                </div>
                <div className="ml-4">
                  <div className='flex justify-between'>
                    <h3 className="text-xl font-normal text-orange-400 mb-1">
                      {testimonials[currentIndex].name}
                    </h3>
                  </div>
                  <p className="text-xl font-normal mb-4">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="mb-4 text-sm text-zinc-400">
                    {testimonials[currentIndex].description}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <img
                  src={testimonials[currentIndex].companyLogo}
                  alt="Company Logo"
                  className="w-20"
                />
                <div className="flex items-center">
                  <button className="ml-4 bg-red-600 text-white px-3 py-1 rounded-md text-sm flex items-center">
                    Watch on <span className="ml-1">▶️</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section with Heading and Thumbnails */}
        <div className="w-full md:w-1/2 relative flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-2 text-gray-800 w-full md:w-3/4">Real Stories, Real Success</h2>
          <p className="text-gray-600 mb-4">Discover what our learners say about us.</p>

          <button
            onClick={handlePrev}
            className="absolute left-2 text-gray-400 hover:text-black"
          >
            &#8592;
          </button>

          <div className="flex gap-2 mb-4 overflow-hidden">
            {testimonials.slice(currentIndex, currentIndex + 4).map((testimonial, index) => (
              <div
                key={index}
                className={`w-20 h-20 rounded-md overflow-hidden border-2 ${
                  index === 0
                    ? "border-orange-500"
                    : "border-gray-300 opacity-50"
                }`}
              >
                <img
                  src={testimonial.smallImage}
                  alt={`Thumbnail ${testimonial.id}`}
                  className={`object-cover w-full h-full ${
                    index === 0 ? "" : "grayscale"
                  }`}
                  onClick={() => handleThumbnailClick((currentIndex + index) % testimonials.length)}
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