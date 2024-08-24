"use client";
import React from "react";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import {
  Box,
  Button,
  chakra,
  Flex,
  GridItem,
  Icon,
  Text,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Heading,
  HStack,
  InputLeftAddon,
  useClipboard,
  InputGroup,
  useToast,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { color, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { useState } from "react";

// Импорт изображений
import Pattern1 from "@/public/images/forms_pattern_1.png";
import Pattern2 from "@/public/images/forms_pattern_2.png";
import Photo from "@/public/images/formscat.png";

const Form = () => {
  const { hasCopied, onCopy } = useClipboard("example@example.com");
  const [formData, setFormData] = useState({
    name: "",

    contact: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, contact } = formData;
    const telegramBotId = "7369782390:AAGhdVtZoEp4cYOsECBqwTXCWBTeeAs29Rs";
    const chatId = 702020795;
    const text = `
    Новая заявка!\nИмя: ${name}\nНомер для связи: +7${contact}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${telegramBotId}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: text,
          }),
        }
      );
      const result = await response.json();
      console.log(result);
      setFormData({
        name: "",

        contact: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    // <motion.div
    //   ref={ref}
    //   style={{
    //     scale: scaleProgress,
    //   }}
    // >
    <Box className="form" id="form">
      <Box
        shadow={"md"}
        rounded="70"
        bgColor={"var(--color-custom-purple)"}
        textAlign={"center"}
        py={10}
      >
        <Stack
          align={"center"}
          justify={"center"}
          spacing="0"
          direction={{ base: "column", md: "row" }}
        >
          <Box order={{ base: 2, md: 1 }}>
            <Image
              alt="Я еще не придумал"
              className="p-5"
              width={"auto"}
              maxH={550}
              src={Photo}
              minH={50}
              height={400}
            />
          </Box>
          <Box p={10} order={{ base: 1, md: 2 }}>
            <div className="pb-6">
              <chakra.p
                fontSize={{
                  base: "5xl",
                  md: "6xl",
                }}
                lineHeight="0.5"
                fontWeight={{
                  base: "bold",
                  md: "extrabold",
                }}
                color="gray.900"
              >
                Закажите
              </chakra.p>
              <chakra.p
                fontSize={{
                  base: "5xl",
                  md: "6xl",
                }}
                fontWeight={{
                  base: "bold",
                  md: "extrabold",
                }}
                color="gray.900"
                lineHeight="shorter"
              >
                звонок
              </chakra.p>
            </div>
            <SimpleGrid
              as="form"
              columns={{
                base: 1,
                lg: 4,
              }}
              mb={8}
            >
              <GridItem
                as="label"
                colSpan={{
                  base: "auto",
                  lg: 4,
                }}
              >
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 14 }}
                >
                  <Input
                    focusBorderColor="#D9F9B6"
                    rounded={"35px"}
                    bg={"#FFFFFF"}
                    size="lg"
                    type="text"
                    textAlign={"center"}
                    placeholder="Имя"
                    required
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </motion.div>
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 14 }}
                >
                  <Input
                    focusBorderColor="#D9F9B6"
                    rounded={"35px"}
                    bg={"#FFFFFF"}
                    size="lg"
                    type="text"
                    textAlign={"center"}
                    placeholder="Имя котика"
                    required
                    // name="name"
                    // id="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </motion.div>
                <Stack
                  style={{ flexWrap: "wrap" }}
                  direction={{ base: "column", sm: "row" }}
                >
                  <motion.div
                    className="box"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 14,
                    }}
                  >
                    <Text
                      align={"left"}
                      fontWeight={"bold"}
                      fontSize={{ base: "xl", md: "lg" }}
                    >
                      Дата заезда
                    </Text>
                    <Input
                      type="datetime-local"
                      focusBorderColor="#D9F9B6"
                      rounded={"35px"}
                      bg={"#FFFFFF"}
                      size="lg"
                      textAlign={"center"}
                      placeholder="Дата заезда"
                      required
                      // name="name"
                      // id="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </motion.div>
                  <motion.div
                    className="box"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 14,
                    }}
                  >
                    <Text
                      align={"left"}
                      fontWeight={"bold"}
                      fontSize={{ base: "xl", md: "lg" }}
                    >
                      Дата выезда
                    </Text>
                    <Input
                      type="datetime-local"
                      focusBorderColor="#D9F9B6"
                      rounded={"35px"}
                      bg={"#FFFFFF"}
                      size="lg"
                      textAlign={"center"}
                      placeholder="Дата выезда"
                      required
                      // name="name"
                      // id="name"
                      value={formData.name}
                      onChange={handleChange}
                    />{" "}
                  </motion.div>
                </Stack>
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 14 }}
                >
                  <InputGroup>
                    <InputLeftAddon
                      focusBorderColor="#D9F9B6"
                      rounded={"35px"}
                      mt={3}
                      size="sm"
                      h="12"
                    >
                      +7
                    </InputLeftAddon>
                    <Input
                      focusBorderColor="#D9F9B6"
                      rounded={"35px"}
                      name="contact"
                      mt={3}
                      textAlign={"center"}
                      bg={"#FFFFFF"}
                      size="lg"
                      type="tel"
                      placeholder="Телефон для связи..."
                      required
                      id="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      h="12"
                    />
                  </InputGroup>
                </motion.div>
              </GridItem>
            </SimpleGrid>
            <motion.div
              className="box"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 14 }}
            >
              <Button
                as={GridItem}
                variant="solid"
                colSpan={{
                  base: "auto",
                  lg: 2,
                }}
                size="lg"
                rounded={"full"}
                type="submit"
                color={"white"}
                bg={"black"}
                cursor="pointer"
                id="btn"
                onClick={handleSubmit}
                value={"Send"}
              >
                Отправить заявку
                <Box as="span" ml={2}>
                  <MdOutlineArrowOutward />
                </Box>
              </Button>{" "}
            </motion.div>
            <chakra.p
              pt={4}
              maxWidth={"lg"}
              fontSize="sm"
              color="gray.600"
              lineHeight="base"
            >
              Мы заботимся о Ваших персональных данных, подробный текст политики
              конфиденциальности доступен{" "}
              <Link onClick={onOpen} color={"pink.500"}>
                здесь.
              </Link>
            </chakra.p>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent rounded={"35px"}>
                <ModalHeader
                  bgColor={"#CCBDF4"}
                  rounded={"full"}
                  m={"5"}
                  textAlign={"center"}
                >
                  Политика конфиденциальности
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Box p={5} color="gray.600">
                    <Heading as="h1" size="lg" mb={4}>
                      Положение об обработке персональных данных
                    </Heading>
                    <Text mb={2}>
                      Настоящее Положение определяет политику ITEEZY. в
                      отношении обработки персональных данных и
                      конфиденциальности, регулирует вопросы обработки
                      персональных данных и устанавливает процедуры,
                      направленные на предотвращение и выявление нарушений
                      законодательства, устранение последствий таких нарушений.
                    </Text>
                  </Box>
                </ModalBody>

                <ModalFooter justify="center">
                  <Button
                    bgColor="#DBF9B8"
                    rounded={"full"}
                    mr={3}
                    onClick={onClose}
                  >
                    Закрыть
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            {/* <chakra.p fontSize="sm" color="gray.600">
              Мы заботимся о Ваших персональных данных, подробный текст политики
              конфиденциальности доступен{" "}
              <Link onClick={onOpen} color={"pink.500"}>
                здесь.
              </Link>
            </chakra.p> */}
          </Box>
        </Stack>
      </Box>
    </Box>
    // </motion.div>
  );
};

export default Form;
