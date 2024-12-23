import { useState, useEffect } from "react";

// Custom hook to detect screen size
export const useScreenSize = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const mobileMatch = window.matchMedia("(max-width: 375px)").matches;
      const tableMatch = window.matchMedia("(max-width: 768px)").matches && !mobileMatch;

      setIsMobile(mobileMatch);
      setIsTablet(tableMatch);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [])

  return { isMobile, isTablet };
}