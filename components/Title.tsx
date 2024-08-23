import React from "react";
import Image from "next/image";
import { Heading, Box, Text, HStack } from "@chakra-ui/react";

import Title_logo from "@/public/images/Paw.png";
import Second_image from "@/public/images/second_title.png";
import Third_picture from "@/public/images/title_picture.png";
import SVGLine1 from "./GSAP elements/Lines/SVGLine1";

const Title = () => {
  return (
    <div className="aboutus" style={{ position: "relative", zIndex: 1 }}>
      <HStack justifyContent={"space-evenly"} position="relative" zIndex={2}>
        <Box>
          <HStack justifyContent={"right"}>
            <Image
              className="mr-5"
              height={"100"}
              alt="Контактный кот_1"
              src={Title_logo}
            />
            <Heading
              lineHeight={"0.5"}
              fontSize={{
                base: "6xl",
                md: "7xl",
                lg: "9xl",
              }}
            >
              Creative
            </Heading>
          </HStack>
          <Heading
            fontSize={{
              base: "5xl",
              md: "7xl",
              lg: "9xl",
            }}
            as={"i"}
            fontFamily={"Work Sans"}
          >
            Kitty House
          </Heading>
        </Box>

        <Box>
          <Image
            className="image-container"
            height={"290"}
            alt="Контактный кот_1"
            src={Second_image}
          />
        </Box>
      </HStack>

      {/* Контейнер для фона */}
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

      <HStack pt={5} zIndex={2} position="relative">
        <Image
          className="mr-5"
          height={"100"}
          alt="Контактный кот_1"
          src={Third_picture}
        />
        <Text maxW={400}>
          Creative Kids Academy provides a nurturing environment where young
          minds can flourish and explore their artistic talents
        </Text>
      </HStack>
    </div>
  );
};

export default Title;
