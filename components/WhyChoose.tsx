import { Box, Heading, Stack, Text, Flex } from "@chakra-ui/react";
import React from "react";
import Image, { StaticImageData } from "next/image";

import Pattern1 from "@/public/images/forms_pattern_1.png";
import { MdPadding } from "react-icons/md";

interface FeatureProps {
  title: string;
  text: string;
  icon_src: StaticImageData;
}

const Feature: React.FC<FeatureProps> = ({ title, text, icon_src }) => {
  return (
    <>
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Image height={100} src={icon_src} alt="Узорчик" />
        <Heading>{title}</Heading>
        <Text maxW={40}>{text}</Text>
      </Flex>
    </>
  );
};

const WhyChoose = () => {
  return (
    <div id="why">
      <Box textAlign={"center"}>
        <Heading fontSize={"8xl"}>Why choose</Heading>
        <Heading fontSize={"8xl"} as={"i"} fontFamily={"Work Sans"}>
          Artistry?
        </Heading>
        <Text py={10}>
          Our students are chosen to study in our childrens school
          <Text> because of the high quality of education</Text>
        </Text>
        <Stack
          spacing={10}
          justifyItems={"center"}
          justifyContent={"space-evenly"}
          direction={{ base: "column", md: "row" }}
        >
          <Feature
            title="Хороший план"
            text="We believe that learning should contribute to the full development of each child."
            icon_src={Pattern1}
          />
          <Box mt={{ base: 0, md: 24 }}>
            <Feature
              title="Настоящий балаган"
              text="We believe that learning should contribute to the full development of each child."
              icon_src={Pattern1}
            />
          </Box>
          <Feature
            title="Тихонько свалил"
            text="We believe that learning should contribute to the full development of each child."
            icon_src={Pattern1}
          />
        </Stack>
      </Box>
    </div>
  );
};

export default WhyChoose;
