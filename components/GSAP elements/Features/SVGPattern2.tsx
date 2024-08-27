import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SVGPattern2() {
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
        viewBox="-400 -20 700 261"
        style={{ width: "100%", height: "100%" }}
      >
        <motion.path
          className="cls-7"
          d="M197.65,.09S-38.71,219.44,115.31,199.23C269.33,179.03,242.38,86.67,.03,144.4"
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
