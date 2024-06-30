import { useEffect, useRef, useState } from "react";

const useMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };
  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        handleMenuClose();
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("touchstart", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return { isMenuOpen, handleMenuOpen, handleMenuClose, menuRef };
};

export default useMenu;
