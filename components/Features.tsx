import { Grid, GridItem, Box, Stack, Heading } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import Pattern1 from "@/public/images/forms_pattern_1.png";
import Pattern2 from "@/public/images/forms_pattern_2.png";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SVGPattern from "./GSAP elements/Features/SVGPattern";
import SVGPattern2 from "./GSAP elements/Features/SVGPattern2";
import SVGPattern3 from "./GSAP elements/Features/SVGPattern3";

const Features = () => {
  const ref = useRef(null);

  // Check if the element is in view, and set `once: true` to trigger the animation only once
  const isInView = useInView(ref, { once: true });
  return (
    <div id="features">
      <motion.div
        ref={ref}
        // Apply the scale only when the element is in view
        initial={{ scale: 0.6, opacity: 0.6 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.6 }} // Adjust transition duration as needed
      >
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={5}>
          <Box
            className="gradient-box"
            minH={{ base: 50, md: 300 }}
            bgColor={"#2BD886"}
            borderRadius={"40px"}
            alignSelf="flex-end"
          >
            <Box
              textAlign={"left"}
              pt={{ base: 5, md: 10 }}
              pl={{ base: 5, md: 10 }}
            >
              <Heading fontSize={{ base: "2xl", md: "3xl" }}>
                Мы находимся рядом с аэропортом. Возможен трансфер.
              </Heading>

              <SVGPattern />
            </Box>
          </Box>

          <Box
            minH={{ base: 150, md: 500 }}
            bgColor={"#CCBDF4"}
            borderRadius={"40px"}
            alignSelf="flex-end"
          >
            <Box
              textAlign={"left"}
              pt={{ base: 5, md: 10 }}
              pl={{ base: 5, md: 10 }}
            >
              <Heading fontSize={{ base: "2xl", md: "3xl" }}>
                Котик будет чувствовать себя как дома.
              </Heading>
            </Box>

            <SVGPattern2 />
          </Box>
          <Box
            minH={{ base: 100, md: 400 }}
            bgColor={"#DBF9B8"}
            borderRadius={"40px"}
            alignSelf="flex-end"
          >
            <Box
              textAlign={"left"}
              pt={{ base: 5, md: 10 }}
              pl={{ base: 5, md: 10 }}
            >
              <Heading fontSize={{ base: "2xl", md: "3xl" }}>
                Ежедневные фото, видеоотчеты
              </Heading>

              <SVGPattern3 />
            </Box>
          </Box>
        </Grid>
      </motion.div>
    </div>
  );
};

export default Features;
