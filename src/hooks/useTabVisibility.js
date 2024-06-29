import { useEffect } from "react";

const useTabVisibility = (onHidden, onVisible) => {
  useEffect(() => {
    const handleTabChange = () => {
      if (document.hidden) onHidden();
      else onVisible();
    };

    document.addEventListener("visibilitychange", handleTabChange);
    return () => {
      document.removeEventListener("visibilitychange", handleTabChange);
    };
  }, [onHidden, onVisible]);
};

export default useTabVisibility;
