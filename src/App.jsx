import { Footer, Header } from "./components";
import { About, Contact, Experience, Home, Projects, Skills } from "./sections";

const App = () => {
  return (
    <main className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white font-space-grotesk transition-colors duration-500 dark:bg-[#100E34]">
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
