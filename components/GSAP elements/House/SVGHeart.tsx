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
        viewBox="-150 0 900 450"
        style={{ width: "100%", height: "100%" }}
      >
        <motion.path
          className="cls-1"
          d="M217.41,470.2c57.64-32.23,111.7-70.84,160.87-114.91,7.06-6.33,14.02-12.77,20.45-19.74,13.38-14.52,24.27-31.16,37.43-45.88,11.16-12.49,23.9-23.55,34.23-36.73,22.53-28.73,32.22-67.17,26.01-103.15-6.21-35.98-28.23-68.94-59.1-88.45-12.04-7.61-25.66-13.32-39.89-13.84-16.17-.6-31.82,5.48-46.34,12.6-28.02,13.75-56.14,35.16-61.39,65.93-1.58-31.99-21.43-62.45-50.06-76.81-29.63-14.86-65.36-12.42-96.89-2.22-20.54,6.65-40.8,17.01-53.69,34.34-6.51,8.75-10.88,18.94-13.97,29.4-8.78,29.67-7.42,62.25,3.81,91.08,18.83,48.39,62.19,82.19,93.26,123.79,31.08,41.6,50.06,92.13,54.07,143.9"
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
