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
        viewBox="270 0 670 447"
        style={{ width: "100%", height: "100%" }}
      >
        <motion.path
          className="cls-4"
          d="M477.5,387.5l24-20s-46-62-8-137,117-57,117-57c0,0,59,10,84,70s-6,110-20,124-35,32-65,32-46-1-67-6-21-8-21-8l-44,2Z"
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
          d="M594.65,257.84c-4.46-5.79-11.95-8.93-19.25-8.65s-14.31,3.79-19.37,9.07c-7.49,7.81-10.66,19.52-8.13,30.04,4.91,20.43,27.7,31.43,36.91,50.32,7.17-8.65,17.55-13.83,27.09-19.75,9.54-5.93,19.02-13.53,22.28-24.28,1.51-4.99,1.55-10.29,1.41-15.5-.2-7.42-.85-15.2-4.94-21.39-3.94-5.96-10.99-9.75-18.14-9.74s-14.19,3.8-18.13,9.77"
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
          d="M567.37,258.28c-3.16,11.37-5.45,22.98-6.85,34.69,9.56-4.94,17.46-13.03,22.19-22.7,.36,15.83,.23,31.67-.37,47.49,9.32-17.66,17.85-35.75,25.53-54.18-.06,13.51,.22,27.02,.84,40.51,4.97-7.87,9.23-16.18,12.72-24.8"
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
