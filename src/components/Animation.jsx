import { motion } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const fadeUpHero = {
  hidden: { opacity: 0, y: "100%" },
  visible: { opacity: 1, y: "0%" },
};

export const fadeUpOn = {
  hidden: { y: 50 },
  visible: { y: 0 },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: "-100%" },
  visible: { opacity: 1, x: "0%" },
};

export const fadeLeftSm = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export const zoomIn = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

export const zoomX = {
  hidden: { scaleX: 1.4 },
  visible: { scaleX: 1 },
};

export const zoomUp = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export const MotionTag = ({
  as = "div",
  children,
  variant = fadeUp,
  className,
  duration = 0.8,
  delay,
  style,
  trigger = "view",
}) => {
  const Tag = motion[as]; // motion.div, motion.h1, motion.p, etc.
  if (trigger === "view") {
    return (
      <Tag
        variants={variant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration, delay, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className={className}
        style={style}
      >
        {children}
      </Tag>
    );
  } else {
    return (
      <Tag
        variants={variant}
        initial="hidden"
        animate="visible"
        transition={{ duration, delay, ease: "easeOut" }}
        // viewport={{ once: true, amount: 0.5 }}
        className={className}
        style={style}
      >
        {children}
      </Tag>
    );
  }
};
