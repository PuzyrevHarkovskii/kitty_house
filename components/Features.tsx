import { Grid, GridItem, Box, Stack, Heading } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import Pattern1 from "@/public/images/forms_pattern_1.png";
import Pattern2 from "@/public/images/forms_pattern_2.png";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
              <Heading fontSize={{ base: "2xl", md: "5xl" }}>Creative</Heading>
              <Heading
                fontSize={{ base: "2xl", md: "5xl" }}
                as={"i"}
                fontFamily={"Work Sans"}
              >
                Writing
              </Heading>
              <Image
                alt="Узорчик"
                src={Pattern1}
                className="mr-10 overflow-hidden"
              />
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
              <Heading fontSize={{ base: "2xl", md: "5xl" }}>Creative</Heading>
              <Heading
                fontSize={{ base: "2xl", md: "5xl" }}
                as={"i"}
                fontFamily={"Work Sans"}
              >
                Visual Arts
              </Heading>
            </Box>

            <Image
              alt="Узорчик"
              src={Pattern1}
              className="mr-10 overflow-hidden"
            />
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
              <Heading fontSize={{ base: "2xl", md: "5xl" }}>Creative</Heading>
              <Heading
                fontSize={{ base: "2xl", md: "5xl" }}
                as={"i"}
                fontFamily={"Work Sans"}
              >
                Writing
              </Heading>
              {/* <Image
              alt="Узорчик"
              src={Pattern1}
              className="ml-20 overflow-hidden"
            /> */}
            </Box>
          </Box>
        </Grid>
      </motion.div>
    </div>
  );
};

export default Features;
