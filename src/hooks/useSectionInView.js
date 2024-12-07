import { useEffect, useRef } from "react";
import { useActiveSection } from "../contexts/ActiveSectionProvider";
import { useInView } from "motion/react";

const useSectionInView = (sectionId) => {
  const { setActiveSection } = useActiveSection();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.5 });

  useEffect(() => {
    if (isInView) setActiveSection(sectionId);
  }, [isInView, setActiveSection, sectionId]);

  return sectionRef;
};

export default useSectionInView;
