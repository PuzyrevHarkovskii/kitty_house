import React from "react";
import Image from "next/image";
import { Heading, Box, Text, HStack } from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";

import Title_logo from "@/public/images/Paw.png";

import Third_picture from "@/public/images/title_picture.png";
import SVGLine1 from "./GSAP elements/Lines/SVGLine1";

import HouseLogo from "@/public/images/Лого для Влада2.svg";

const Title = () => {
  return (
    <div className="aboutus" style={{ position: "relative", zIndex: 1 }}>
      <HStack justifyContent={"space-evenly"} position="relative" zIndex={2}>
        <Box>
          <HStack justifyContent={"right"}>
            <motion.div>
              <Image
                className="wave mr-5 overflow-hidden"
                height={"100"}
                alt="Контактный кот_1"
                src={Title_logo}
              />
            </motion.div>
            <Heading
              lineHeight={"1"}
              fontSize={{
                base: "2xl",
                md: "3xl",
                lg: "5xl",
              }}
            >
              Отель для кошечек
            </Heading>
          </HStack>
          <Heading
            lineHeight={"0.8"}
            fontSize={{
              base: "6xl",
              md: "9xl",
              lg: "10xl",
            }}
          >
            Kitty House
          </Heading>
        </Box>

        <Box>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ from: 330, duration: 1 }}
          >
            <Image height={"500"} alt="Контактный кот_1" src={HouseLogo} />
          </motion.div>
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
      >
        <Image
          className="mr-5"
          height={"100"}
          alt="Контактный кот_1"
          src={Third_picture}
        />
        <Text maxW={400}>
          Отель для кошечек в Санкт-Петербурге, метро Купчино. Мы там бла бла
          бла
        </Text>
      </HStack>
    </div>
  );
};

export default Title;
