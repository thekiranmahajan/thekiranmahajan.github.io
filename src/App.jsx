import { Footer, Header } from "./components";
import { About, Contact, Experience, Home, Projects, Skills } from "./sections";

const App = () => {
  return (
    <main className="selection:bg-custom-yellow relative z-0 flex min-h-screen w-full flex-col items-center overflow-x-hidden bg-white font-space-grotesk transition-colors duration-500 dark:bg-dark-blue selection:dark:bg-custom-violet">
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
