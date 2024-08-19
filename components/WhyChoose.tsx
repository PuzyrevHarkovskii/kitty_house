import { Box, Heading, Stack, Text, Flex } from "@chakra-ui/react";
import React from "react";
import SVGHouse from "./GSAP elements/House/SVGHouse";
import SVGHeart from "./GSAP elements/House/SVGHeart";

interface FeatureProps {
  title: string;
  text: string;
  IconComponent: React.FC; // Обновленный тип
}

const Feature: React.FC<FeatureProps> = ({ title, text, IconComponent }) => {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        mb={4}
        // Отступ снизу, если нужен
      >
        <IconComponent /> {/* Пример передачи размера */}
      </Box>
      <Heading>{title}</Heading>
      <Text maxW={40}>{text}</Text>
    </Flex>
  );
};

const WhyChoose = () => {
  return (
    <div id="why">
      <Box textAlign={"center"}>
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
            IconComponent={SVGHouse} // Передайте компонент анимации
          />
          <Box mt={{ base: 0, md: 24 }}>
            <Feature
              title="Постоянный уход"
              text="We believe that learning should contribute to the full development of each child."
              IconComponent={SVGHeart} // Передайте компонент анимации
            />
          </Box>
          <Feature
            title="Просторные боксы"
            text="We believe that learning should contribute to the full development of each child."
            IconComponent={SVGHouse} // Передайте компонент анимации
          />
        </Stack>
      </Box>
    </div>
  );
};

export default WhyChoose;
