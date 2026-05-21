import { Check, Phone, Mail } from "lucide-react";
import img from "@/assets/about.png";
import { useState, useRef, useEffect } from "react";

export default function AboutUs() {
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLeftVisible(true);
        }
      },
      { threshold: 0.1 },
    );
    if (leftRef.current) {
      observer.observe(leftRef.current);
    }
    return () => {
      if (leftRef.current) {
        observer.unobserve(leftRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRightVisible(true);
        }
      },
      { threshold: 0.1 },
    );
    if (rightRef.current) {
      observer.observe(rightRef.current);
    }
    return () => {
      if (rightRef.current) {
        observer.unobserve(rightRef.current);
      }
    };
  }, []);
  return (
    <div className="w-full bg-gray-100 py-16 sm:py-20 md:pt-24 lg:pt-32 relative overflow-hidden ">
      <div className="absolute top-10 right-10 w-24 h-24 sm:w-32 sm:h-32 bg-green-200 rounded-full opacity-40 blur-2xl pointer-events-none" />
      <div className="absolute top-40 left-0 w-20 h-20 sm:w-28 sm:h-28 bg-emerald-300 rounded-full opacity-35 blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-28 h-28 sm:w-40 sm:h-40 bg-green-300 rounded-full opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 left-1/3 w-24 h-24 sm:w-32 sm:h-32 bg-emerald-200 rounded-full opacity-35 blur-2xl pointer-events-none" />
      <div className="absolute top-1/3 right-5 w-16 h-16 sm:w-24 sm:h-24 bg-green-400 rounded-full opacity-40 blur-2xl pointer-events-none" />
      <div className="absolute top-20 left-10 w-12 h-12 sm:w-20 sm:h-20 bg-emerald-300 rounded-full opacity-45 blur-2xl pointer-events-none" />
      <div className="absolute bottom-20 left-5 w-14 h-14 sm:w-24 sm:h-24 bg-green-200 rounded-full opacity-35 blur-2xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-10 h-10 sm:w-16 sm:h-16 bg-emerald-400 rounded-full opacity-30 blur-xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-28 md:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-16 md:gap-20 lg:gap-24 items-start">
          <div
            ref={leftRef}
            className={`relative flex flex-col items-center transition-all duration-1000 ease-out ${
              leftVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative mb-4 sm:mb-6 w-full max-w-sm">
              <div className="border-4 border-green-500 rounded-2xl p-6 sm:p-8 transform -rotate-2 bg-white shadow-lg pb-24 sm:pb-32">
                <img
                  src={img}
                  alt="Cleaning Professional"
                  className="w-full h-56 sm:h-64 object-cover rounded-xl"
                />
              </div>

              <div className="w-11/12 sm:w-5/6 bg-white rounded-xl shadow-xl p-4 sm:p-5 absolute left-1/2 md:left-72 -bottom-8 sm:-bottom-10 transform -translate-x-1/2 z-20 mx-auto">
                <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <img
                    src={img}
                    alt="CEO"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 sm:border-3 border-green-500 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 truncate">
                      Winnie Doe
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">CEO</p>
                  </div>
                  <div className="flex gap-1 shrink-0">
                    <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                      <Phone className="text-gray-600" size={14} />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                      <Mail className="text-gray-600" size={14} />
                    </button>
                  </div>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed ">
                  Wincare cleaners is one of the fastest-growing outsource
                  service and cleaning service & materials provider companies.
                </p>
              </div>
            </div>

            <div className="h-16 sm:h-20" />
          </div>

          <div
            ref={rightRef}
            className={`flex flex-col mt-10 lg:mt-0 transition-all duration-1000 ease-out ${
              rightVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
              The Best help in cleaning the house.
            </h2>

            {/* Checkmarks List */}
            <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="shrink-0 mt-0.5 sm:mt-1">
                  <div className="flex items-center justify-center h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-green-500">
                    <Check className="text-white" size={14} />
                  </div>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                  Our team professional and experienced.
                </p>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="shrink-0 mt-0.5 sm:mt-1">
                  <div className="flex items-center justify-center h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-green-500">
                    <Check className="text-white" size={14} />
                  </div>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                  Quick and efficient cleaning service.
                </p>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="shrink-0 mt-0.5 sm:mt-1">
                  <div className="flex items-center justify-center h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-green-500">
                    <Check className="text-white" size={14} />
                  </div>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                  100% satisfaction guaranteed.
                </p>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="shrink-0 mt-0.5 sm:mt-1">
                  <div className="flex items-center justify-center h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-green-500">
                    <Check className="text-white" size={14} />
                  </div>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                  Quick and efficient cleaning service.
                </p>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="shrink-0 mt-0.5 sm:mt-1">
                  <div className="flex items-center justify-center h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-green-500">
                    <Check className="text-white" size={14} />
                  </div>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                  Highly Discipline in Workplace.
                </p>
              </div>
            </div>

            {/* Learn More Button */}
            <div>
              <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-green-600 text-white font-bold text-xs sm:text-sm md:text-base rounded-lg hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
