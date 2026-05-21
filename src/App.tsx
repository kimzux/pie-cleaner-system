import { useState, useEffect } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Shop from "./components/Shop";
import VideoSection from "./components/VideoSection";
import Plan from "./components/Plan";
import Blog from "./components/Blog";
import Footer from "./components/footer";

function App() {
  const normalizePath = (path: string) => path.replace(/\/$/, "") || "/";
  const [route, setRoute] = useState(normalizePath(window.location.pathname));

  useEffect(() => {
    const onPop = () => setRoute(normalizePath(window.location.pathname));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return (
    <>
      <Navbar />
      {route === "/shop" ? (
        <>
          <Home />
          <Shop />
          <Footer />
        </>
      ) : (
        <>
          <Home />
          <About />
          <Service />
          <VideoSection />
          <Plan />
          <Blog />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
