import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SVGLine2() {
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
        viewBox="0 0 935.64 311"
        style={{ width: "100%", height: "100%" }}
      >
        <motion.path
          className="cls-5"
          d="M.39,218.5S148.39,35.5,423.39,124.5s512-51,512-51"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isInView ? 1 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          strokeWidth={2}
          stroke="black"
          strokeDasharray="1 1"
          fill="none"
          opacity={0.5}
        />
      </motion.svg>
    </div>
  );
}
