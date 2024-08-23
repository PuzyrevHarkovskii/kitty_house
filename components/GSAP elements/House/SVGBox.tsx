import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SVGBox() {
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
        viewBox="-80 0 800 380"
        style={{ width: "100%", height: "100%" }}
      >
        <motion.path
          className="cls-1"
          d="M183.55,180.37c3.54,51.16,3.94,102.53,1.2,153.73,54.46,15.73,110.1,27.33,166.31,34.67,5.47-6.64,2.49-16.42,.91-24.88-1.31-6.95-1.46-14.06-1.61-21.13-.32-15.14-.65-30.29-.97-45.43-.24-11.43-.49-22.89,.63-34.27,1.42-14.46,5-29.15,1.84-43.33-.34-1.52-.78-3.07-1.8-4.24-1.43-1.65-3.7-2.23-5.83-2.71-53.94-12.34-109.01-19.77-164.29-22.18"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isInView ? 1 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          strokeWidth={2}
          stroke="black"
          strokeDasharray="1 1"
          fill="none"
        />
        <motion.path
          className="cls-1"
          d="M357.9,364.71c6.87-2.98,10.73-10.17,14.38-16.71,14.83-26.53,34.74-50.2,58.33-69.36,5.61-4.55,11.66-9.15,14.54-15.77,2.7-6.19,2.22-13.25,1.68-19.98-1.65-20.88-3.29-41.75-4.94-62.63-4.64,1.61-8.06,5.49-11.26,9.21-14.31,16.65-28.62,33.29-42.92,49.94-9.72-12.07-19.44-24.13-29.17-36.2-1.65-2.04-3.35-4.2-3.8-6.79-.5-2.86,.63-5.76,2.08-8.28,5.84-10.17,16.55-16.32,25.76-23.6,9.75-7.71,18.1-17.02,26.4-26.28,8.58-9.58,17.16-19.15,25.74-28.73,15.9,7.49,32.4,13.7,49.3,18.55-14.75,16.57-29.49,33.13-44.24,49.7"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isInView ? 1 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          strokeWidth={2}
          stroke="black"
          strokeDasharray="1 1"
          fill="none"
        />
        <motion.path
          className="cls-1"
          d="M286.84,88.31c-33.61,28.37-68.54,55.16-104.65,80.27-12.94-14.88-27.3-28.53-42.8-40.72,13.27-4.33,23.76-14.35,34.15-23.67,24.17-21.69,50.34-41.15,78.08-58.06,5.74,6.63,11.49,13.25,17.23,19.88,5.33,6.14,10.93,12.49,18.42,15.64,6.63,2.79,14.05,2.79,21.24,2.91,42.23,.72,84.35,7.38,124.74,19.72"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isInView ? 1 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          strokeWidth={2}
          stroke="black"
          strokeDasharray="1 1"
          fill="none"
        />
        <motion.path
          className="cls-1"
          d="M260.24,240.87c-6.31-6.94-13.06-14.16-22.01-16.94s-20.63,.9-23.19,9.92c-1.38,4.88,.13,10.08,1.97,14.81,8.78,22.46,25.02,41.09,41.53,58.66,.59,.63,1.25,1.3,2.11,1.44,.91,.15,1.79-.34,2.57-.81,15.41-9.34,28.42-22.6,37.46-38.18,5.3-9.14,9.26-20.51,4.79-30.09-1.32-2.83-3.31-5.31-5.56-7.47-5.19-4.97-12.27-8.41-19.42-7.71-7.15,.7-13.97,6.34-14.56,13.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isInView ? 1 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          strokeWidth={2}
          stroke="black"
          strokeDasharray="1 1"
          fill="none"
        />
        <motion.path
          className="cls-1"
          d="M238.94,171.08c-2.1-8.18-3.36-17.03-.39-24.93s11.43-14.27,19.64-12.3c9.45,2.27,13.49,13.21,16.01,22.59,16.73-12.88,39.49-17.57,59.96-12.34,1.28-6.12,2.57-12.25,3.85-18.37,.59-2.8,1.2-5.66,2.65-8.12,5.33-9.02,19.91-8.05,27.13-.45,7.22,7.6,8.71,18.92,8.72,29.4,0,5.13,.4,11.43,5.03,13.64"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isInView ? 1 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          strokeWidth={2}
          stroke="black"
          strokeDasharray="1 1"
          fill="none"
        />
        <motion.path
          className="cls-1"
          d="M272.81,173.83c6.85-2.36,13.95-4.02,21.13-4.96,3.85-.5,7.89-.77,11.47,.72s6.5,5.23,5.82,9.05"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isInView ? 1 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          strokeWidth={2}
          stroke="black"
          strokeDasharray="1 1"
          fill="none"
        />
        <motion.path
          className="cls-1"
          d="M337.15,178.02c-2.3-6.08,1.46-13.18,7.05-16.49s12.45-3.6,18.93-3.07"
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
