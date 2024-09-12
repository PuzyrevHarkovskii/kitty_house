"use client";

import { Box, Flex, Heading } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box id="header">
      <Flex
        bg={"white"}
        color={"gray.600"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderStyle={"solid"}
        borderColor={"gray.200"}
        align={"center"}
      >
        <div>
          <Heading fontSize={"lg"} mb={2}>
            г. Санкт-Петербург
          </Heading>
          <Heading fontSize={"lg"}>м. Звездная</Heading>
        </div>

        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "center" }}
        ></Flex>
      </Flex>
    </Box>
  );
}
