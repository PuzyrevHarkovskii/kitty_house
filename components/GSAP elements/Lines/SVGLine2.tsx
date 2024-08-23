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
        viewBox="-10 100 1000 300"
        style={{ width: "100%", height: "100%" }}
      >
        <motion.path
          className="cls-5"
          d="M.28,225.5S361.28-16.5,500.28,117.5s-428.42,189-71.21,45.5,452.33-.65,452.33-.65"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isInView ? 1 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          strokeWidth={2}
          stroke="black"
          strokeDasharray="1 1"
          fill="none"
          opacity={0.3}
        />
      </motion.svg>
    </div>
  );
}
