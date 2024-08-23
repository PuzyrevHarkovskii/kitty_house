import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SVGHeart() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      style={{
        border: "none",
        padding: "0",
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%",
        height: "100%",
      }}
    >
      <motion.svg
        viewBox="0 0 700 450"
        style={{ width: "100%", height: "100%" }}
      >
        <motion.path
          className="cls-4"
          d="M211.4,273.54s-61-89,27-128,87.71,75,87.71,75c0,0,15.29-106,100.29-90s83,50,63,96-109,117-109,117c0,0-43,65-44,67s-55-44-66-51-67.18-32.54-79.59-48.77-55.41-72.23-54.41-133.23,47-115,88-122,74,14.67,74,14.67c0,0,36-71.67,39-69.67s12,54,12,54c0,0,22-14,38-14s37,6,41,13,28-31,28-31l9,35s14,4,19,13,11,22,11,22c0,0-3,38-15,44"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isInView ? 1 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          strokeWidth={2}
          stroke="black"
          strokeDasharray="1 1"
          fill="none"
        />
        <motion.path
          className="cls-4"
          d="M359.1,91.12c10.04,4.4,22.3,3.3,31.39-2.82"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isInView ? 1 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          strokeWidth={2}
          stroke="black"
          strokeDasharray="1 1"
          fill="none"
        />
        <motion.path
          className="cls-4"
          d="M439.77,87.62c7.99,6.97,19.66,9.44,29.78,6.31"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isInView ? 1 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          strokeWidth={2}
          stroke="black"
          strokeDasharray="1 1"
          fill="none"
        />
        <motion.path
          className="cls-4"
          d="M397.45,111.15c3.13,.15,6.75,.1,8.73-2.32,.96-1.16,1.34-2.68,1.69-4.15,1.33-5.45,2.65-10.9,3.98-16.35,3.92,8.31,9.1,17.64,18.14,19.29"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isInView ? 1 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          strokeWidth={2}
          stroke="black"
          strokeDasharray="1 1"
          fill="none"
        />
      </motion.svg>
    </div>
  );
}
