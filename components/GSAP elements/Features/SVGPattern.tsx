import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SVGPattern() {
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
        viewBox="-30 -30 500 250"
        style={{ width: "100%", height: "100%" }}
      >
        <motion.path
          className="cls-6"
          d="M195.88,.05c-30.62,73.27-57.39,148.14-80.17,224.21"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isInView ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          strokeWidth={2}
          stroke="black"
          strokeDasharray="1 1"
          fill="none"
        />
        <motion.path
          className="cls-6"
          d="M.08,54.79c45.93,36.34,99.15,63.41,155.57,79.13"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isInView ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          strokeWidth={2}
          stroke="black"
          strokeDasharray="1 1"
          fill="none"
        />
        <motion.path
          className="cls-6"
          d="M91.92,34.44c1.17,12.5,7.88,23.74,15.06,34.04,29.76,42.72,70.68,77.58,117.59,100.18"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isInView ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          strokeWidth={2}
          stroke="black"
          strokeDasharray="1 1"
          fill="none"
        />
      </motion.svg>
    </div>
  );
}
