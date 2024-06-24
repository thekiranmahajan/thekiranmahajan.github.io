import { Footer, Header } from "./components";
import { About, Contact, Experience, Home, Projects, Skills } from "./sections";

const App = () => {
  return (
    <main className="relative flex min-h-screen w-full flex-col overflow-x-hidden scroll-smooth bg-white font-space-grotesk transition-colors duration-500 selection:bg-yellow dark:bg-[#100E34] selection:dark:bg-violet">
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
