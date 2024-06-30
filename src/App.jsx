import { useEffect, useRef } from "react";
import { Footer, Header } from "./components";
import { About, Contact, Experience, Home, Projects, Skills } from "./sections";
import useTabVisibility from "./hooks/useTabVisibility";

const App = () => {
  const originalTitleRef = useRef(document.title);

  const onHidden = () => {
    document.title = "🥺 Kiran feeling lonely :(";
  };
  const onVisible = () => {
    document.title = originalTitleRef.current;
  };

  useTabVisibility(onHidden, onVisible);

  useEffect(() => {
    const originalTitle = originalTitleRef.current;

    return () => {
      document.title = originalTitle;
    };
  }, []);

  return (
    <main className="relative z-0 flex min-h-screen w-full flex-col items-center overflow-x-hidden bg-white font-space-grotesk transition-colors duration-500 selection:bg-custom-yellow dark:bg-dark-blue selection:dark:bg-custom-violet">
      <Header />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
