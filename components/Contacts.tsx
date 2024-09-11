"use client";
import React, { useRef } from "react";
import { Heading, Text, Box, Stack, HStack, Flex } from "@chakra-ui/react";
import Image from "next/image";

import { IconType } from "react-icons";
import { AiOutlinePhone } from "react-icons/ai";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import SVGLine3 from "./GSAP elements/Lines/SVGLine3";

import cat_1 from "@/public/images/kitty-circle.png";
import cat_2 from "@/public/images/kitty-circle-2.png";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
        duration: 0.6,
        ease: "easeOut",
      }}
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
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true });

  return (
    <Box position="relative" overflow="hidden" w="100%" h="100%">
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        zIndex={0}
        opacity={0.3}
      >
        <SVGLine3 />
      </Box>

      <Box id="contacts" textAlign={"center"} position="relative" zIndex={1}>
        <HStack justify={"center"}>
          <motion.div
            ref={headingRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.6,
            }}
          >
            <Box>
              <Heading
                lineHeight={"0.5"}
                fontSize={{
                  base: "5xl",
                  md: "6xl",
                  lg: "8xl",
                }}
              >
                Наши
              </Heading>
              <Heading
                fontSize={{
                  base: "5xl",
                  md: "6xl",
                  lg: "8xl",
                }}
              >
                контакты
              </Heading>
            </Box>
          </motion.div>

          <Image
            className="image-container"
            height={"150"}
            alt="Контактный кот_2"
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
    </Box>
  );
};

export default Contacts;
