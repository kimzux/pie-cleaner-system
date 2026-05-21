import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Book from "./Book";
import img from "@/assets/hero-carousel.png";

const carouselImages = [
  {
    id: 1,
    image: img,
    smallText: "Reliable and Stable Crews",
    mainHeading: "Professional",
    highlightWord: "Cleaning",
    endWord: "Services",
    subtext:
      "While you are doing something important, we will put things in order in the apartment, private house or office",
  },
  {
    id: 2,
    image: img,
    smallText: "Expert Team with Experience",
    mainHeading: "Eco-Friendly",
    highlightWord: "Green",
    endWord: "Solutions",
    subtext:
      "Safe for your family and the environment, using only certified products",
  },
  {
    id: 3,
    image: img,
    smallText: "Fast and Efficient Service",
    mainHeading: "Quick",
    highlightWord: "Professional",
    endWord: "Results",
    subtext: "Get your space clean and fresh in no time with our expert team",
  },
  {
    id: 4,
    image: img,
    smallText: "Premium eco-safe formulas",
    mainHeading: "Trusted",
    highlightWord: "Cleaning",
    endWord: "Products",
    subtext:
      "Premium products designed to deliver sparkling, long-lasting hygiene for every surface.",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1,
    );
  };
  const [bookVisible, setBookVisible] = useState(false);
  const bookRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBookVisible(true); // Element came into view
        }
      },
      { threshold: 0.1 }, // Trigger when 10% visible
    );

    if (bookRef.current) {
      observer.observe(bookRef.current);
    }

    return () => {
      if (bookRef.current) {
        observer.unobserve(bookRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full">
      <div className="relative w-full overflow-hidden h-[60vh] md:h-[calc(100vh-80px)]">
        {/* Carousel Images */}
        {carouselImages.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            } bg-white flex items-center justify-center`}
          >
            <img
              src={item.image}
              alt={`Slide ${item.id}`}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0" />
          </div>
        ))}

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
          <div className="text-center space-y-6 max-w-5xl">
            <span className="text-base font-normal text-white tracking-tight">
              {carouselImages[currentSlide].smallText}
            </span>

            <div className="mt-4">
              <span className="text-4xl sm:text-5xl md:text-7xl font-bold text-white">
                {carouselImages[currentSlide].mainHeading}
              </span>
              <div className="flex flex-wrap justify-center gap-3 items-center mt-4">
                <span className="text-4xl sm:text-5xl md:text-7xl font-bold px-4 sm:px-6 py-2 bg-white text-[#008B52]  shadow-lg">
                  {carouselImages[currentSlide].highlightWord}
                </span>

                <span className="text-4xl sm:text-5xl md:text-7xl font-bold text-white">
                  {carouselImages[currentSlide].endWord}
                </span>
              </div>
            </div>

            <p className="text-base text-white font-normal leading-relaxed mt-10 max-w-2xl mx-auto">
              {carouselImages[currentSlide].subtext}
            </p>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="hidden md:block absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white hover:from-green-600 hover:to-emerald-700 text-gray-500 p-3  transition-all duration-300 shadow-lg rounded-md"
          aria-label="Previous slide"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={nextSlide}
          className="hidden md:block absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white hover:from-green-600 hover:to-emerald-700 text-gray-500 p-3 rounded-md transition-all duration-300 shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight size={28} />
        </button>

        <div className="hidden  md:flex absolute 2xl:bottom-30 md:bottom-40 left-1/2 transform -translate-x-1/2 z-20  gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-linear-to-r from-green-500 to-emerald-600"
                  : "bg-green-400 bg-opacity-60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div
        ref={bookRef}
        className={`relative mt-8 mb-20 md:mt-1 md:mb-2 z-10 border-2 border-gray-100 transition-all duration-1000 ease-out ${
          bookVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="absolute -top-24 left-0 right-0 z-30">
          <Book />
        </div>
        <div className="pt-48 sm:pt-64 md:pt-56 lg:pt-0" />
      </div>
    </div>
  );
}
