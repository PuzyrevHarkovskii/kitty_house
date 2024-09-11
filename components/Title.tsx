import React from "react";
import Image from "next/image";
import { Heading, Box, Text, HStack } from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";

import Title_logo from "@/public/images/Paw.png";

import Third_picture from "@/public/images/title_picture.png";
import SVGLine1 from "./GSAP elements/Lines/SVGLine1";

import HouseLogo from "@/public/images/Kitty_House_1_white.png";

const Title = () => {
  return (
    <div
      className="aboutus overflow-hidden"
      style={{ position: "relative", zIndex: 1 }}
    >
      <HStack justifyContent={"space-evenly"} position="relative" zIndex={2}>
        <Box>
          <HStack className="overflow-hidden" justifyContent={"right"}></HStack>
        </Box>

        <Box>
          <Image height={"600"} alt="Контактный кот_1" src={HouseLogo} />
        </Box>
      </HStack>

      <Box
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        opacity={0.3}
        width="100%"
      >
        <SVGLine1 />
      </Box>

      <HStack
        pt={5}
        zIndex={2}
        position="relative"
        display={"flex"}
        wrap={"wrap"}
      ></HStack>
    </div>
  );
};

export default Title;
