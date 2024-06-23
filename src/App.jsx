import { Footer, Header } from "./components";

const App = () => {
  return (
    <main className="relative flex min-h-screen w-screen flex-col bg-white font-space-grotesk transition-colors duration-500 dark:bg-[#100E34]">
      <Header />
      <Footer />
    </main>
  );
};

export default App;
