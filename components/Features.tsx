import { Grid, GridItem, Box, Stack, Heading } from "@chakra-ui/react";
import React from "react";

import Pattern1 from "@/public/images/forms_pattern_1.png";
import Pattern2 from "@/public/images/forms_pattern_2.png";
import Image from "next/image";

const Features = () => {
  return (
    <div id="features">
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
    </div>
  );
};

export default Features;
