import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SVGPattern3() {
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
        viewBox="-150 -20 280 210"
        style={{ width: "100%", height: "100%" }}
      >
        <motion.path
          className="cls-8"
          d="M48.59,.03c7.98,28.94-2.61,59.13,.99,88.62"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isInView ? 1 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          strokeWidth={2}
          stroke="black"
          strokeDasharray="1 1"
          fill="none"
        />
        <motion.path
          className="cls-8"
          d="M.05,72.1c9.65-3.83,19.31-7.67,28.96-11.5,5.51-2.19,11.04-4.39,16.09-7.2,5.76-3.2,10.79-7.14,16.1-10.8,4.87-3.35,9.98-6.46,15.1-9.58,7.98-4.86,15.97-9.72,23.95-14.58"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isInView ? 1 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          strokeWidth={2}
          stroke="black"
          strokeDasharray="1 1"
          fill="none"
        />
        <motion.path
          className="cls-8"
          d="M9.81,17.13c2.59,6.14,9.13,10.62,15.44,14.74,23.04,15.05,46.73,29.45,70.43,43.84"
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
