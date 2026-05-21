import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

export default function FooterComponent() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Our Team", href: "#" },
    { name: "Pricing Packages", href: "#" },
    { name: "Watch Our Work", href: "#" },
    { name: "Recent Blogs", href: "#" },
  ];

  const services = [
    { name: "Standard Residential Clean", href: "#" },
    { name: "Deep Structural Clean", href: "#" },
    { name: "Move-In / Move-Out Detail", href: "#" },
    { name: "Commercial & Office Care", href: "#" },
  ];

  return (
    <footer className="w-full bg-green-100/20 text-zinc-800 border-t border-zinc-200">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="flex flex-col gap-4">
            <a href="/" className="flex items-center shrink-0 group">
              <img
                src={logo}
                alt="logo"
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <p className="text-zinc-600 text-sm leading-relaxed max-w-sm">
              Providing premium, eco-friendly cleaning services tailored to keep
              your living and workspace completely spotless.
            </p>

            <div className="flex items-center gap-4 mt-2">
              <a
                href="#"
                className="p-2 rounded-full bg-zinc-100 hover:bg-emerald-50 text-zinc-600 hover:text-emerald-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              <a
                href="#"
                className="p-2 rounded-full bg-zinc-100 hover:bg-emerald-50 text-zinc-600 hover:text-emerald-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg
                  className="h-5 w-5 fill-none stroke-current stroke-2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              <a
                href="#"
                className="p-2 rounded-full bg-zinc-100 hover:bg-emerald-50 text-zinc-600 hover:text-emerald-600 transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 mb-5">
              Quick Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="inline-flex items-center text-sm text-zinc-600 hover:text-emerald-600 transition-colors duration-200 group"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="inline-flex items-center text-sm text-zinc-600 hover:text-emerald-600 transition-colors duration-200 group"
                  >
                    {service.name}
                    <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 mb-5">
              Contact Details
            </h4>
            <ul className="space-y-4 text-sm text-zinc-600">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Mbezi beach africana
                  <br />
                  Dar-es-salaam Tanzania
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-600 shrink-0" />
                <a
                  href="tel:+15550199"
                  className="hover:text-emerald-600 transition-colors"
                >
                  0710153085
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-600 shrink-0" />
                <a
                  href="mailto:support@sparkleteam.com"
                  className="hhover:text-emerald-600 transition-colors hover:text-emerald-600"
                >
                  support@wincaretz.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full bg-zinc-50 border-t border-zinc-200 py-6 px-4 text-center text-xs text-zinc-500">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {currentYear} wincare cleanners. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-800 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-zinc-800 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
