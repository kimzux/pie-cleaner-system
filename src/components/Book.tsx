import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { Calendar, User, Mail, Phone, Wrench, Check, X } from "lucide-react";

interface ServiceType {
  id: number;
  title: string;
  description: string;
  icon?: ReactNode;
  featured?: boolean;
}

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  serviceType: string;
}

interface BookComponentProps {
  service?: ServiceType | null;
  isOpen?: boolean;
  onClose?: () => void;
}

const serviceTypes = [
  "Regular Cleaning",
  "Deep Cleaning",
  "Post Construction",
  "Move In/Out",
  "Residential Cleaning",
  "Commercial Cleaning",
  "Event Cleanup",
  "Window Cleaning",
  "Outdoor Furniture",
  "Laundry Service",
  "Car Wash",
  "Sofa Cleaning",
];

export default function BookComponent({
  service,
  isOpen = false,
  onClose,
}: BookComponentProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    serviceType: service?.title ?? "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (service?.title) {
      setFormData((prev) => ({
        ...prev,
        serviceType: prev.serviceType || service.title,
      }));
    }
  }, [service]);

  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        serviceType: "",
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const bookingForm = (
    <div className="w-full px-4 py-2">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xl">
          <form onSubmit={handleSubmit} className="p-8 md:p-4">
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-sm flex items-center gap-3">
                <Check className="text-green-600" size={24} />
                <p className="text-green-700 font-medium">
                  Booking submitted successfully!
                </p>
              </div>
            )}

            {isOpen && (
              <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  Book {service?.title ?? "a service"}
                </h2>
                <p className="text-sm text-gray-600">
                  Fill out the quick booking form and we will follow up shortly.
                </p>
              </div>
            )}

            {/* Row 1: Name, Email, Phone */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="relative">
                  <User
                    className="absolute left-4 top-3.5 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="kimzuuh Doe"
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none bg-gray-50"
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <Mail
                    className="absolute left-4 top-3.5 text-gray-400"
                    size={20}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="kimzuuh@example.com"
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none bg-gray-50"
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <Phone
                    className="absolute left-4 top-3.5 text-gray-400"
                    size={20}
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="07XX XXX XXX"
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none bg-gray-50"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Date, Service Type, Button */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
              <div>
                <div className="relative">
                  <Calendar
                    className="absolute left-4 top-3.5 text-gray-400"
                    size={20}
                  />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none bg-gray-50"
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <Wrench
                    className="absolute left-4 top-3.5 text-gray-400 pointer-events-none"
                    size={20}
                  />
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none bg-gray-50 appearance-none cursor-pointer"
                  >
                    <option value="">choose service</option>
                    {serviceTypes.map((serviceType) => (
                      <option key={serviceType} value={serviceType}>
                        {serviceType}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="py-3 bg-linear-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 h-12 disabled:opacity-70 transform hover:-translate-y-0.5"
              >
                {isSubmitted ? "Submitted ✓" : "Book Now"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  if (!isOpen) {
    return bookingForm;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 bg-black/50">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative w-full max-w-3xl mx-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 p-2 rounded-full bg-white shadow-md text-gray-700 hover:bg-gray-100"
          aria-label="Close booking modal"
        >
          <X size={20} />
        </button>
        {bookingForm}
      </div>
    </div>
  );
}
