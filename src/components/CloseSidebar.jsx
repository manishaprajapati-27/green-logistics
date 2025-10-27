import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const CloseSidebar = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Close sidebar whenever route changes
    setIsOpen(false);
  }, [pathname, setIsOpen]);
};

export default CloseSidebar;
