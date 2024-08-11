"use client";
import React from "react";
import { Heading, Text, Box, Stack, HStack, Flex } from "@chakra-ui/react";
import Image from "next/image";
import cat_1 from "@/public/images/contactcat_1.png";
import cat_2 from "@/public/images/contactcat_2.png";
import { IconType } from "react-icons";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

interface ContactBoxProps {
  color: string;
  icon: IconType;
  text: string;
  href: string;
}

const ContactBox: React.FC<ContactBoxProps> = ({
  color,
  icon: Icon,
  text,
  href,
}) => {
  return (
    <motion.div
      className="contacts box"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
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
              {Icon && <Icon size="50" />}
              <Text fontSize={"xl"} pt={3} ml={2}>
                {text}
              </Text>
            </Stack>
          </Flex>
        </Box>
      </a>
    </motion.div>
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
            style={{
              transform: "rotate(-30deg)",
              marginBottom: "4em",
              marginRight: "1em",
            }}
          />

          <Box>
            <Heading
              lineHeight={"0.5"}
              fontSize={{
                base: "5xl",
                md: "6xl",
                lg: "8xl",
              }}
            >
              We are open
            </Heading>
            <Heading
              fontFamily={"Work Sans"}
              fontSize={{
                base: "5xl",
                md: "6xl",
                lg: "8xl",
              }}
              as="i"
            >
              to talking
            </Heading>
          </Box>

          <Image
            className="image-container"
            height={"75"}
            alt="Контактный кот_1"
            src={cat_2}
            style={{
              transform: "rotate(15deg)",
              marginTop: "4em",
              marginLeft: "2em",
            }}
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
            color="var(--color-custom-green)"
            icon={AiOutlinePhone}
            text="Телефон"
            href={`tel:+79114030090`}
          />
          <ContactBox
            color="var(--color-custom-purple)"
            icon={FaTelegram}
            text="Telegram"
            href="https://t.me/zVoidspb"
          />
          <ContactBox
            color="var(--color-custom-salad)"
            icon={FaWhatsapp}
            text="Whatsapp"
            href="https://wa.me/79114030090"
          />
        </Stack>
      </Box>
    </div>
  );
};

export default Contacts;
