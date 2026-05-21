import { ArrowUpRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      tag: "Tips & Tricks",
      title: "10 Spots You Miss During Your Weekly Deep Clean",
      description:
        "From baseboards to light fixtures, discover the most common overlooked areas in a home clean.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600",
      date: "May 18, 2026",
    },
    {
      id: 2,
      tag: "Eco Friendly",
      title: "The Ultimate Guide to Green Cleaning Products",
      description:
        "How switching to natural, non-toxic products keeps your kids, pets, and the planet completely safe.",
      image:
        "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=600",
      date: "May 12, 2026",
    },
    {
      id: 3,
      tag: "Office Care",
      title: "Why a Clean Workspace Boosts Team Productivity",
      description:
        "Data shows that a sanitized, uncluttered office reduces sick days and massively lifts employee morale.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
      date: "May 05, 2026",
    },
    {
      id: 4,
      tag: "Spring Clean",
      title: "Decluttering Your Home Fast: The 20-Minute Rule",
      description:
        "Learn our team's signature speed-sorting method to eliminate mess without feeling overwhelmed.",
      image:
        "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=600",
      date: "Apr 28, 2026",
    },
  ];

  const [blogVisible, setBlogVisible] = useState(false);
  const blogRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBlogVisible(true); // Element came into view
        }
      },
      { threshold: 0.2 },
    );

    if (blogRef.current) {
      observer.observe(blogRef.current);
    }

    return () => {
      if (blogRef.current) {
        observer.unobserve(blogRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={blogRef}
      className={
        "w-full bg-white py-24 px-4 text-zinc-900 transition-all duration-1000 ease-out " +
        (blogVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
      }
    >
      <div className="mx-auto max-w-6xl">
        {/* Left-Aligned Header */}
        <div className="text-left mb-14 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-600 font-bold mb-3">
            Recent Blogs
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-900">
            Latest News & Updates
          </h2>
          <p className="mt-4 text-zinc-600 text-base sm:text-lg leading-relaxed">
            Expert cleaning insights, organization tips, and updates direct from
            our seasoned professional team.
          </p>
        </div>

        {/* Responsive 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group flex flex-col justify-between bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-200/80 transition-all duration-300 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-100"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-200">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 rounded-md bg-white/90 border border-zinc-200 backdrop-blur-md px-2.5 py-1 text-xs font-bold tracking-wide text-emerald-700 shadow-sm">
                  {blog.tag}
                </span>
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-1 p-6">
                <p className="text-xs text-zinc-400 font-medium mb-2">
                  {blog.date}
                </p>
                <h3 className="text-lg font-bold leading-snug tracking-tight text-zinc-900 group-hover:text-emerald-600 transition-colors duration-200 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-600 line-clamp-3 leading-relaxed flex-1">
                  {blog.description}
                </p>

                {/* Read More Button Wrapper */}
                <div className="mt-6 pt-4 border-t border-zinc-200">
                  <button
                    type="button"
                    onClick={() => console.log(`Navigate to blog ${blog.id}`)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold tracking-wide text-emerald-600 hover:text-emerald-700 transition-colors duration-200 cursor-pointer group/btn"
                  >
                    Read More
                    <ArrowUpRight className="h-4 w-4 transform transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
