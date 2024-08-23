import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SVGLine1() {
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
        viewBox="-20 0 1100 411"
        style={{ width: "100%", height: "100%" }}
      >
        <motion.path
          className="cls-3"
          d="M.35,296.5S327.35-17.5,665.35,166.5c182.75,99.49,294.34-21.64,294.34-21.64"
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
