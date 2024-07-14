import { Grid, GridItem, Box, Stack, Heading } from "@chakra-ui/react";
import React from "react";

import Pattern1 from "@/public/images/forms_pattern_1.png";
import Image from "next/image";

const Features = () => {
  return (
    <div id="features">
      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={10}>
        <Box
          className=" hover:translate-x-2 hover:scale-105 transition-all duration-300"
          minH={300}
          bgColor={"#2BD886"}
          borderRadius={"40px"}
          alignSelf="flex-end"
        >
          <Box textAlign={"left"} pt={10} pl={10}>
            <Heading fontSize={"5xl"}>Creative</Heading>
            <Heading fontSize={"5xl"} as={"i"} fontFamily={"Work Sans"}>
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
          className=" hover:translate-x-2 hover:scale-105 transition-all duration-300"
          minH={500}
          bgColor={"#CCBDF4"}
          borderRadius={"40px"}
          alignSelf="flex-end"
        >
          <Box textAlign={"left"} pt={10} pl={10}>
            <Heading fontSize={"5xl"}>Creative</Heading>
            <Heading fontSize={"5xl"} as={"i"} fontFamily={"Work Sans"}>
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
          className=" hover:translate-x-2 hover:scale-105 transition-all duration-300"
          minH={400}
          bgColor={"#DBF9B8"}
          borderRadius={"40px"}
          alignSelf="flex-end"
        >
          <Box textAlign={"left"} pt={10} pl={10}>
            <Heading fontSize={"5xl"}>Creative</Heading>
            <Heading fontSize={"5xl"} as={"i"} fontFamily={"Work Sans"}>
              Writing
            </Heading>
            <Image
              alt="Узорчик"
              src={Pattern1}
              className="ml-20 overflow-hidden"
            />
          </Box>
        </Box>
      </Grid>
    </div>
  );
};

export default Features;
