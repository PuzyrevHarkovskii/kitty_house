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
      transition={{ duration: 1, ease: "easeOut" }}
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

      <Heading
        fontSize={{
          base: "5xl",
          md: "6xl",
          lg: "8xl",
        }}
        lineHeight={"0.5"}
      >
        Why choose
      </Heading>

      <Heading
        fontSize={{
          base: "5xl",
          md: "6xl",
          lg: "8xl",
        }}
        as={"i"}
        fontFamily={"Work Sans"}
      >
        Kitty House?
      </Heading>
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
