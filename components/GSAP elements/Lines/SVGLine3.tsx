import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SVGLine3() {
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
          d="M64.34,322.5S435.34,232.5,247.34,98.5s-348.82-11-167.41,64.5,551.41,190.5,493.41,6.5,380-107,210,55,201,76,179-26"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isInView ? 1 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          strokeWidth={2}
          stroke="black"
          strokeDasharray="1 1"
          fill="none"
          // opacity={0.5}
        />
      </motion.svg>
    </div>
  );
}
