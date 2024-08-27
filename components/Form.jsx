"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import {
  Box,
  Button,
  chakra,
  Flex,
  GridItem,
  Text,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Heading,
  InputLeftAddon,
  InputGroup,
  useClipboard,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Photo from "@/public/images/formscat.png";

const Form = () => {
  const { hasCopied, onCopy } = useClipboard("example@example.com");
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    checkIn: "",
    checkOut: "",
    petName: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [totalPrice, setTotalPrice] = useState(0); // State to store the total price

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Calculate total price based on checkIn and checkOut dates
  useEffect(() => {
    if (formData.checkIn && formData.checkOut) {
      const checkInDate = new Date(formData.checkIn);
      const checkOutDate = new Date(formData.checkOut);
      const timeDifference = checkOutDate - checkInDate;

      // Calculate the number of days, rounding to the nearest whole day
      const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

      // Ensure the daysDifference is at least 1 (minimum charge for 1 day)
      const validDays = daysDifference > 0 ? daysDifference : 1;
      setTotalPrice(validDays * 500); // Multiply by 500 rubles
    } else {
      setTotalPrice(0); // Reset the total price if dates are not valid
    }
  }, [formData.checkIn, formData.checkOut]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, contact, checkIn, checkOut, petName } = formData;
    const telegramBotId = "7369782390:AAGhdVtZoEp4cYOsECBqwTXCWBTeeAs29Rs";
    const chatId = 702020795;
    const text = `
      Новая заявка!
      Имя: ${name}
      Имя котика: ${petName}
      Дата заезда: ${checkIn}
      Дата выезда: ${checkOut}
      Номер для связи: +7${contact}
      Общая стоимость: ${totalPrice} рублей
    `;

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
        checkIn: "",
        checkOut: "",
        petName: "",
      });
      setTotalPrice(0); // Reset total price after submission
      onOpen(); // Open the modal on successful submission
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

  // Check if the element is in view, and set `once: true` to trigger the animation only once
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      // Apply the scale only when the element is in view
      initial={{ scale: 0.6, opacity: 0.3 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.6 }} // Adjust transition duration as needed
    >
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
                  fontSize={{ base: "5xl", md: "6xl" }}
                  lineHeight="0.5"
                  fontWeight={{ base: "bold", md: "extrabold" }}
                  color="gray.900"
                >
                  Закажите
                </chakra.p>
                <chakra.p
                  fontSize={{ base: "5xl", md: "6xl" }}
                  fontWeight={{ base: "bold", md: "extrabold" }}
                  color="gray.900"
                  lineHeight="shorter"
                >
                  звонок
                </chakra.p>
              </div>
              <SimpleGrid as="form" columns={{ base: 1, lg: 4 }} mb={8}>
                <GridItem as="label" colSpan={{ base: "auto", lg: 4 }}>
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
                      my={"3"}
                      textAlign={"center"}
                      placeholder="Имя котика"
                      required
                      name="petName"
                      id="petName"
                      value={formData.petName || ""}
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
                        name="checkIn"
                        id="checkIn"
                        value={formData.checkIn || ""}
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
                        name="checkOut"
                        id="checkOut"
                        value={formData.checkOut || ""}
                        onChange={handleChange}
                      />
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
                        children="+7"
                        fontSize={"xl"}
                        fontWeight={"bold"}
                        h="12"
                      />
                      <Input
                        focusBorderColor="#D9F9B6"
                        rounded={"35px"}
                        bg={"#FFFFFF"}
                        size="lg"
                        h="12"
                        mt={3}
                        type="text"
                        textAlign={"center"}
                        placeholder="Номер телефона"
                        required
                        name="contact"
                        id="contact"
                        value={formData.contact}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </motion.div>
                </GridItem>
              </SimpleGrid>
              <Stack spacing={3} align={"center"}>
                {/* Display the total price */}
                {totalPrice > 0 && (
                  <Text fontSize="2xl" fontWeight="bold">
                    Общая стоимость: {totalPrice} рублей
                  </Text>
                )}
                <Button
                  onClick={handleSubmit}
                  variant={"solid"}
                  size={"lg"}
                  rounded={"35px"}
                  color={"white"}
                  bg={"black"}
                >
                  Отправить
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent rounded={"25px"}>
          <ModalHeader>Подтверждение</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Ваша заявка была отправлена!</Text>
          </ModalBody>
          <ModalFooter>
            <Button rounded={"full"} colorScheme="pink" onClick={onClose}>
              Закрыть
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </motion.div>
  );
};

export default Form;
