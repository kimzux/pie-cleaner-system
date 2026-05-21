import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function PricingSection() {
  const plans = [
    {
      name: "Standard Clean",
      price: "120,000 Tsh",
      period: "/ visit",
      description:
        "Perfect for maintaining a fresh and tidy living space regularly.",
      features: [
        "Dusting & wiping all surfaces",
        "Vacuuming & mopping floors",
        "Kitchen counters & sink cleanup",
        "Basic bathroom sanitization",
        "Trash removal",
      ],
      isPopular: false,
      buttonText: "Get Started",
    },
    {
      name: "Deep Clean",
      price: "210,000 Tsh",
      period: "/ visit",
      description: "An intensive top-to-bottom scrub down for a spotless home.",
      features: [
        "Everything in Standard Clean",
        "Inside microwave & oven cleaning",
        "Baseboards & window sills wiped",
        "Deep scrub of tile grout & showers",
        "Cabinet fronts detailed",
      ],
      isPopular: true, // Highlights this card
      buttonText: "Book Most Popular",
    },
    {
      name: "Premium / Moving",
      price: "340,000 Tsh",
      period: "/ visit",
      description:
        "Our maximum package designed for move-ins, move-outs, or post-renovation.",
      features: [
        "Everything in Deep Clean",
        "Inside all cabinets & drawers",
        "Interior window glass washing",
        "Blinds & light fixtures detailed",
        "Wall spot cleaning",
      ],
      isPopular: false,
      buttonText: "Choose Premium",
    },
  ];

  const [planVisible, setPlanVisible] = useState(false);
  const planRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlanVisible(true); // Element came into view
        }
      },
      { threshold: 0.2 },
    );

    if (planRef.current) {
      observer.observe(planRef.current);
    }

    return () => {
      if (planRef.current) {
        observer.unobserve(planRef.current);
      }
    };
  });

  return (
    <section
      className={`w-full  py-24 px-4 text-green-500 transition-all duration-1000 ease-out ${
        planVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div ref={planRef} className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-gray-900 mb-3">
            Fair & Transparent
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Choose Your Cleaning Plan
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            No hidden fees. Select a package that best fits your space and
            schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-between rounded-3xl p-8  border transition-all duration-300 hover:-translate-y-2 ${
                plan.isPopular
                  ? "border-green-500 shadow-[0_0_30px_rgba(34,197,94,0.15)] md:scale-105 z-10"
                  : "border-gray-300 hover:border-green-500"
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-500 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-black">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="text-xl font-bold tracking-tight mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-400 min-h-10">
                  {plan.description}
                </p>
                <div className="mt-6 mb-8 flex items-baseline">
                  <span className="text-3xl font-extrabold tracking-tight">
                    {plan.price}
                  </span>
                  <span className="ml-1 text-sm text-gray-400 font-medium">
                    {plan.period}
                  </span>
                </div>

                <hr className="border-white/10 my-6" />

                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-gray-900"
                    >
                      <Check className="h-5 w-5 text-green-400 shrink-0 mr-3 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Bottom: Call to Action */}
              <div className="mt-8">
                <button
                  type="button"
                  className={`w-full py-4 px-6 rounded-xl font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                    plan.isPopular
                      ? "bg-green-500 text-black hover:bg-green-400 font-bold shadow-lg shadow-green-500/20"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
