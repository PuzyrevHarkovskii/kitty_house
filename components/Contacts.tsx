import React from "react";
import { Heading, Text, Box, Stack, HStack, Flex } from "@chakra-ui/react";
import Image from "next/image";
import cat_1 from "@/public/images/contactcat_1.png";
import cat_2 from "@/public/images/contactcat_2.png";
import { IconType } from "react-icons";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";

interface ContactBoxProps {
  color: string;
  icon: IconType;
  text: string;
}

const ContactBox: React.FC<ContactBoxProps> = ({ color, icon: Icon, text }) => {
  return (
    <Box
      w={80}
      h={180}
      alignContent={"center"}
      bg={color}
      p={4}
      borderRadius={"70px"}
    >
      <Flex justify={"center"}>
        <Stack align={"center"}>
          {Icon && <Icon size="40" />}
          <Text fontSize={"xl"} pt={3} ml={2}>
            {text}
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};

const Contacts = () => {
  return (
    <div>
      <Box id="contacts" textAlign={"center"}>
        <HStack justify={"center"}>
          <Image
            className="image-container"
            height={"75"}
            alt="Контактный кот_1"
            src={cat_1}
          />

          <Box>
            <Heading fontSize={"7xl"}>We are open</Heading>
            <Heading fontFamily={"Work Sans"} fontSize={"6xl"} as="i">
              to talking
            </Heading>
          </Box>

          <Image
            className="image-container"
            height={"75"}
            alt="Контактный кот_1"
            src={cat_2}
          />
        </HStack>
        <Stack
          py={20}
          align={"center"}
          justify={"center"}
          spacing={8}
          direction={{ base: "column", md: "row" }}
        >
          <ContactBox
            color="#2BD886"
            icon={BiMessageRounded}
            text="Contact us"
          />
          <ContactBox color="#CCBDF4" icon={AiOutlinePhone} text="Call us" />
          <ContactBox
            color="#DBF9B8"
            icon={BiMessageRounded}
            text="Video call"
          />
        </Stack>
      </Box>
    </div>
  );
};

export default Contacts;
