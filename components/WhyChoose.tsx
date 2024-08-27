import { Box, Heading, Stack, Text, Flex } from "@chakra-ui/react";
import React from "react";
import SVGPaw from "./GSAP elements/House/SVGPaw";
import SVGHeart from "./GSAP elements/House/SVGHeart";
import SVGBox from "./GSAP elements/House/SVGBox";
import SVGLine2 from "./GSAP elements/Lines/SVGLine2";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FeatureProps {
  title: string;
  text: string;
  IconComponent: React.FC;
}

const Feature: React.FC<FeatureProps> = ({ title, text, IconComponent }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Box display="flex" alignItems="center" justifyContent="center" mb={4}>
          <IconComponent />
        </Box>
        <Heading>{title}</Heading>
        <Text maxW={40}>{text}</Text>
      </Flex>
    </motion.div>
  );
};

const WhyChoose = () => {
  // References for headings
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  // Animations for headings
  const isTitleInView = useInView(titleRef, { once: true });
  const isSubtitleInView = useInView(subtitleRef, { once: true });

  return (
    <Box position="relative" id="why" textAlign={"center"}>
      {/* SVG background */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={-1}
      >
        <SVGLine2 />
      </Box>

      {/* Animated Title */}
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Heading
          fontSize={{
            base: "5xl",
            md: "6xl",
            lg: "8xl",
          }}
        >
          Преимущества
        </Heading>
      </motion.div>

      {/* Animated Subtitle */}
      <motion.div
        ref={subtitleRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isSubtitleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <Heading
          lineHeight={"1"}
          fontSize={{
            base: "5xl",
            md: "6xl",
            lg: "8xl",
          }}
        >
          Kitty House
        </Heading>
      </motion.div>

      <Text>
        Our students are chosen to study in our children's school
        <Text> because of the high quality of education</Text>
      </Text>

      <Stack
        spacing={10}
        pt={5}
        justifyItems={"center"}
        justifyContent={"space-evenly"}
        direction={{ base: "column", md: "row" }}
      >
        <Feature
          title="Комфортные условия"
          text="We believe that learning should contribute to the full development of each child."
          IconComponent={SVGHeart}
        />
        <Box mt={{ base: 0, md: 24 }}>
          <Feature
            title="Постоянный уход"
            text="We believe that learning should contribute to the full development of each child."
            IconComponent={SVGPaw}
          />
        </Box>
        <Feature
          title="Просторные боксы"
          text="Тут написать про размеры домиков."
          IconComponent={SVGBox}
        />
      </Stack>
    </Box>
  );
};

export default WhyChoose;
