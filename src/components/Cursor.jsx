// import React, { useEffect, useState } from "react";

// const Cursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const moveCursor = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", moveCursor);
//     return () => window.removeEventListener("mousemove", moveCursor);
//   }, []);

//   return (
//     <div
//       className="pointer-events-none fixed top-0 left-0 z-[9999]"
//       style={{
//         transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
//       }}
//     >
//       {/* Outer circle */}
//       <div className="w-6 h-6 border-1 border-primary rounded-full flex items-center justify-center">
//         {/* Inner filled circle */}
//         <div className="w-2.5 h-2.5 bg-[#15b01ac9] rounded-full"></div>
//       </div>
//     </div>
//   );
// };

// export default Cursor;

import React, { useEffect, useState } from "react";

const Cursor = () => {
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 });
  const [outerPos, setOuterPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let mouseX = 0,
      mouseY = 0;
    let outerX = 0,
      outerY = 0;
    const speed = 0.1; // smaller = smoother trail

    const move = () => {
      // smooth animation for outer circle
      outerX += (mouseX - outerX) * speed;
      outerY += (mouseY - outerY) * speed;
      setOuterPos({ x: outerX, y: outerY });
      requestAnimationFrame(move);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setDotPos({ x: mouseX, y: mouseY }); // dot moves instantly
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === "a" ||
        e.target.tagName === "button" ||
        e.target.closest("a", "button")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (
        e.target.tagName === "a" ||
        e.target.tagName === "button" ||
        e.target.closest("a", "button")
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    move();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{
          transform: `translate(${outerPos.x - 12}px, ${outerPos.y - 12}px)`,
          transition: "transform 0.02s linear",
        }}
      >
        <div
          className={`w-7 h-7 border-1 rounded-full ${
            isHovering
              ? "border-[#15b01a54] bg-[#15b01a54]"
              : "border-primary bg-transparent"
          }`}
        ></div>
      </div>
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{
          transform: `translate(${dotPos.x - 4}px, ${dotPos.y - 4}px)`,
        }}
      >
        <div className="w-2.5 h-2.5 bg-[#15b01a96] rounded-full"></div>
      </div>
    </>
  );
};

export default Cursor;
