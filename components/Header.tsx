"use client";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Heading,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";

import Header_picture from "@/public/images/Header_picture.png";

import KittyHouseNaming from "@/public/images/KittyHouseBuffNaming.png";

export default function Header() {
  return (
    <Box id="header">
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        ></Flex>
        {/* <Image height={25} alt="КиттиХаус" src={KittyHouseNaming} /> */}
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "center" }}>
          <Flex display={{ base: "none", md: "flex" }} ml={10}></Flex>
        </Flex>

        <Text>
          {" "}
          г. Санкт-Петербург, метро Купчино <div>89816995431</div>{" "}
        </Text>
      </Flex>
    </Box>
  );
}

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}
