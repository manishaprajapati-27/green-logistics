import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useCloseSidebarOnNavigate(setIsOpen) {
  const { pathname } = useLocation();

  useEffect(() => {
    // Close sidebar whenever route changes
    setIsOpen(false);
  }, [pathname, setIsOpen]);
}