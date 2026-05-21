import { useState, useEffect, useRef } from "react";
import type { ReactNode } from "react";
import BookModal from "./Book";
import homeImg from "@/assets/Home.svg";
import buildImage from "@/assets/build.svg";
import eventImg from "@/assets/event.svg";
import windowImg from "@/assets/window.svg";
import outDoor from "@/assets/outDoor.svg";
import loundryImg from "@/assets/laundry.svg";
import { ShoppingCartIcon } from "lucide-react";
import sofaImg from "@/assets/sofa.svg";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
  iconType?: "svg" | "jsx" | "emoji";
  featured: boolean;
  ctaLabel?: string;
  ctaHref?: string;
  ctaType?: "link" | "button";
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Residential Cleaning",
    description:
      "You'll have your own moving representative on-call, any time of day or night. No automated systems or unanswered questions.",
    icon: homeImg,
    iconType: "svg",
    featured: false,
  },
  {
    id: 2,
    title: "Commercial Cleaning",
    description:
      "You'll have your own moving representative on-call, any time of day or night. No automated systems or unanswered questions.",
    icon: buildImage,
    iconType: "svg",
    featured: false,
  },
  {
    id: 3,
    title: "Event Cleanup",
    description:
      "You'll have your own moving representative on-call, any time of day or night. No automated systems or unanswered questions.",
    icon: eventImg,
    iconType: "svg",
    featured: true,
  },
  {
    id: 4,
    title: "Window Cleaning",
    description:
      "You'll have your own moving representative on-call, any time of day or night. No automated systems or unanswered questions.",
    icon: windowImg,
    iconType: "svg",
    featured: false,
  },
  {
    id: 5,
    title: "Outdoor Furniture",
    description:
      "You'll have your own moving representative on-call, any time of day or night. No automated systems or unanswered questions.",
    icon: outDoor,
    iconType: "svg",
    featured: false,
  },
  {
    id: 6,
    title: "Laundry Service",
    description:
      "You'll have your own moving representative on-call, any time of day or night. No automated systems or unanswered questions.",
    icon: loundryImg,
    iconType: "svg",
    featured: false,
  },
  {
    id: 7,
    title: "Cleaning Products",
    description:
      "We sell high-quality cleaning products for every home and commercial space.",
    icon: <ShoppingCartIcon className="h-16 w-16 text-green-600" />,
    iconType: "jsx",
    ctaLabel: "Shop Now",
    ctaHref: "/shop#shop",
    ctaType: "link",
    featured: false,
  },
  {
    id: 8,
    title: "Sofa Cleaning",
    description:
      "You'll have your own moving representative on-call, any time of day or night. No automated systems or unanswered questions.",
    icon: sofaImg,
    iconType: "svg",
    featured: false,
  },
];

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<
    (typeof services)[number] | null
  >(null);
  const [visibleCards, setVisibleCards] = useState(false);
  const containerRef = useRef(null);

  // Intersection observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCards(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const handleBookNow = (service: (typeof services)[number]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <div className="w-full bg-gray-100 relative overflow-hidden py-4">
      <div className="absolute top-10 right-10 w-24 h-24 sm:w-32 sm:h-32 bg-green-200 rounded-full opacity-40 blur-2xl pointer-events-none" />
      <div className="absolute top-40 left-0 w-20 h-20 sm:w-28 sm:h-28 bg-emerald-300 rounded-full opacity-35 blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-28 h-28 sm:w-40 sm:h-40 bg-green-300 rounded-full opacity-30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Professional Care and Services
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Advancing Cleaning & Outsourced Staff Service through Skilled
            Management. Cleaning Driving And Security Service
          </p>
        </div>

        <div
          ref={containerRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 transition-all duration-1000 ease-out ${
            visibleCards
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {services.map((service) => (
            <div
              key={service.id}
              className={`rounded-lg p-6 sm:p-8 transition-all duration-300 transform hover:shadow-lg hover:-translate-y-1 ${
                service.featured
                  ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg"
                  : "bg-white text-gray-900 shadow-md hover:shadow-xl"
              }`}
            >
              {/* Icon */}
              <div className="mb-4">
                {service.iconType === "svg" ? (
                  <img
                    src={service.icon as string}
                    alt={`${service.title} icon`}
                    className="mx-auto h-14 w-14 sm:h-16 sm:w-16 object-contain"
                  />
                ) : service.iconType === "jsx" ? (
                  <div className="mx-auto h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center">
                    {service.icon}
                  </div>
                ) : (
                  <span className="text-4xl sm:text-5xl">{service.icon}</span>
                )}
              </div>

              <h3
                className={`text-lg sm:text-xl font-bold mb-3 ${
                  service.featured ? "text-white" : "text-gray-900"
                }`}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className={`text-xs sm:text-sm mb-6 leading-relaxed ${
                  service.featured ? "text-green-50" : "text-gray-600"
                }`}
              >
                {service.description}
              </p>

              {/* Call to action */}
              {service.ctaType === "link" ? (
                <a
                  href={service.ctaHref}
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 font-bold text-sm sm:text-base rounded-lg bg-linear-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-2xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 active:scale-95 group relative overflow-hidden animate-bounce"
                >
                  {/* Shimmer effect background */}
                  <span className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700" />

                  <span className="relative flex items-center gap-2 ">
                    <ShoppingCartIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    {service.ctaLabel ?? "Shop Now"}
                  </span>

                  {/* Arrow icon */}
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              ) : (
                <button
                  onClick={() => handleBookNow(service)}
                  className={`w-full px-4 sm:px-6 py-3 sm:py-3.5 font-bold text-sm sm:text-base rounded-lg transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105 active:scale-95 border-2 ${
                    service.featured
                      ? "border-white bg-white text-green-600 hover:bg-green-50"
                      : "border-green-600 bg-transparent text-green-600 hover:bg-green-600 hover:text-white hover:border-green-700"
                  }`}
                >
                  Book Now
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <BookModal
          service={selectedService}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
