import { useEffect } from "react";

const useTabFocus = (onTabFocus, onTabBlur) => {
  useEffect(() => {
    window.addEventListener("focus", onTabFocus);
    window.addEventListener("blur", onTabBlur);

    return () => {
      window.removeEventListener("focus", onTabFocus);
      window.removeEventListener("blur", onTabBlur);
    };
  }, [onTabFocus, onTabBlur]);
};

export default useTabFocus;
