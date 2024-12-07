import { useState, useContext, createContext } from "react";

const ActiveSectionContext = createContext();

export const useActiveSection = () => useContext(ActiveSectionContext);

export const ActiveSectionProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("home");
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};
