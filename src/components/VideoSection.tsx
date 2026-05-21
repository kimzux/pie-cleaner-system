import { PlayCircle } from "lucide-react";
import videoPoster from "@/assets/VideoPromoSection.png";

export default function VideoSection() {
  const handlePlay = () => {
    window.open(
      "https://www.youtube.com/watch?v=d4Iip7BHXwg",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section className="relative w-full min-h-[75vh] bg-black text-white overflow-hidden flex flex-col justify-center items-center py-20 px-4">
      <div className="absolute inset-0 z-0">
        <img
          src={videoPoster}
          alt="Watch our latest cleaning work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center flex flex-col items-center gap-12">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-green-300">
            Watch our latest work
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            See our cleaning team in action
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-gray-200 leading-relaxed">
            Watch our latest cleaning work over the video, then tap the play
            icon to begin.
          </p>
        </div>

        {/* --- POPPING & PULSING PLAY BUTTON --- */}
        <button
          type="button"
          onClick={handlePlay}
          className="group relative flex items-center justify-center text-white cursor-pointer"
          aria-label="Play video"
        >
          <span className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-75 group-hover:opacity-0 transition-opacity duration-300" />

          <span className="absolute -inset-2 rounded-full bg-white/10 animate-pulse dynamic-pulse" />

          <span className="relative z-10 flex items-center justify-center rounded-full bg-white/20 p-6 shadow-[0_0_30px_rgba(255,255,255,0.3)] backdrop-blur-md border border-white/30 transform transition-all duration-300 cubic-bezier(0.175, 0.885, 0.32, 1.275) group-hover:scale-115 group-hover:bg-white/30 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]">
            <PlayCircle className="h-20 w-20 transform transition-transform duration-300 group-hover:scale-105" />
          </span>
        </button>
      </div>
    </section>
  );
}
