"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

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
  UnorderedList,
  ListItem,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Center,
} from "@chakra-ui/react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Photo from "@/public/images/kitty-circle-2.png";
import OfferModal from "./SecondModal";

const Form = () => {
  const { hasCopied, onCopy } = useClipboard("example@example.com");
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    checkIn: "",
    checkOut: "",
    petAge: "",
    petName: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [totalPrice, setTotalPrice] = useState(0); // State to store the total price
  const {
    isOpen: isFirstOpen,
    onOpen: onFirstOpen,
    onClose: onFirstClose,
  } = useDisclosure();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const { name, contact, checkIn, checkOut, petName, petAge } = formData;
    if (name && contact && checkIn && checkOut && petName && petAge) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [formData]);

  useEffect(() => {
    if (formData.checkIn && formData.checkOut) {
      const checkInDate = new Date(formData.checkIn);
      const checkOutDate = new Date(formData.checkOut);
      const timeDifference = checkOutDate - checkInDate;

      const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

      const validDays = daysDifference > 0 ? daysDifference : 1;
      setTotalPrice(validDays * 500);
    } else {
      setTotalPrice(0);
    }
  }, [formData.checkIn, formData.checkOut]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, contact, checkIn, checkOut, petName, petAge } = formData;
    const telegramBotId = "7369782390:AAGhdVtZoEp4cYOsECBqwTXCWBTeeAs29Rs";
    const chatId = 702020795;
    const text = `
      Новая заявка!
      Имя: ${name}
      Имя котика: ${petName}
      Возраст котика: ${petAge}
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
        petAge: "",
      });
      setTotalPrice(0);
      onFirstOpen();
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

  const isInView = useInView(ref, { once: true });

  const onSend = () => {
    onOpen(); // Открывает модальное окно
  };

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.6, opacity: 0.3 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      <Center>
        <Box className="form" id="form">
          <Box
            shadow={"md"}
            rounded={["0", "45"]}
            bgColor={"var(--color-custom-purple)"}
            textAlign={"center"}
            py={10}
            width={["100vw", "75vw"]} // 100vw для телефонов, 75vw для ПК
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
                  style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Box py={10} order={{ base: 1, md: 2 }}>
                <div className="pb-6">
                  <chakra.p
                    fontSize={{ base: "5xl", md: "6xl" }}
                    lineHeight="0.5"
                    fontWeight={{ base: "bold", md: "extrabold" }}
                    color="gray.900"
                  >
                    Забронировать
                  </chakra.p>
                  <chakra.p
                    fontSize={{ base: "5xl", md: "6xl" }}
                    fontWeight={{ base: "bold", md: "extrabold" }}
                    color="gray.900"
                    lineHeight="shorter"
                  >
                    домик
                  </chakra.p>
                </div>
                <SimpleGrid as="form" columns={{ base: 1, lg: 4 }} mb={8}>
                  <GridItem as="label" colSpan={{ base: "auto", lg: 4 }}>
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
                      <Input
                        focusBorderColor="#D9F9B6"
                        rounded={"35px"}
                        bg={"#FFFFFF"}
                        size="lg"
                        type="text"
                        textAlign={"center"}
                        placeholder="Ваше имя"
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
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 14,
                      }}
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
                      <Input
                        focusBorderColor="#D9F9B6"
                        rounded={"35px"}
                        bg={"#FFFFFF"}
                        size="lg"
                        type="number"
                        mb={4}
                        textAlign={"center"}
                        placeholder="Возраст котика"
                        required
                        name="petAge"
                        id="petAge"
                        value={formData.petAge || ""}
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
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 14,
                      }}
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
                    isDisabled={!isFormValid}
                  >
                    Забронировать
                  </Button>
                </Stack>
              </Box>
            </Stack>
            <Text fontSize="sm" pb={5} color="gray.600">
              Нажимая кнопку &quot;Забронировать&quot;, вы соглашаетесь с нашей{" "}
              <Link onClick={onOpen} color="pink.500">
                политикой конфиденциальности
              </Link>
              .
              <OfferModal />
            </Text>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent rounded={"35px"}>
                <ModalHeader
                  bgColor={"pink"}
                  rounded={"full"}
                  m={"5"}
                  textAlign={"center"}
                >
                  Политика конфиденциальности
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Box p={5} color="gray.600">
                    <Heading size="lg" mb="4" textAlign="center">
                      Защита данных
                    </Heading>

                    <Text mb="4">
                      Администрация сайта <strong>киттихаус.рф</strong> (далее
                      Сайт) не может передать или раскрыть информацию,
                      предоставленную пользователем (далее Пользователь) при
                      регистрации и использовании функций сайта третьим лицам,
                      кроме случаев, описанных законодательством страны, на
                      территории которой пользователь ведет свою деятельность.
                    </Text>

                    <Heading size="md" mb="2">
                      Получение персональной информации
                    </Heading>
                    <Text mb="4">
                      Для коммуникации на сайте пользователь обязан внести
                      некоторую персональную информацию. Для проверки
                      предоставленных данных, сайт оставляет за собой право
                      потребовать доказательства идентичности в онлайн или
                      офлайн режимах.
                    </Text>

                    <Heading size="md" mb="2">
                      Использование персональной информации
                    </Heading>
                    <Text mb="4">
                      Сайт использует личную информацию Пользователя для
                      обслуживания и для улучшения качества предоставляемых
                      услуг. Часть персональной информации может быть
                      предоставлена банку или платежной системе, если это
                      обусловлено процедурой перевода средств. Сайт прилагает
                      все усилия для сбережения личных данных Пользователя.
                      Личная информация может быть раскрыта в случаях, описанных
                      законодательством, либо если это необходимо для соблюдения
                      юридической процедуры. В других случаях информация не
                      будет раскрыта третьим лицам.
                    </Text>

                    <Heading size="md" mb="2">
                      Коммуникация
                    </Heading>
                    <Text mb="4">
                      После регистрации Пользователь получает сообщение,
                      подтверждающее успешную регистрацию. Пользователь имеет
                      право в любой момент прекратить получение информационных
                      бюллетеней, воспользовавшись соответствующим сервисом на
                      Сайте.
                    </Text>

                    <Heading size="md" mb="2">
                      Ссылки
                    </Heading>
                    <Text mb="4">
                      На сайте могут содержаться ссылки на другие сайты. Сайт не
                      несет ответственности за содержание, качество и политику
                      безопасности этих сайтов. Данное заявление о
                      конфиденциальности относится только к информации,
                      размещенной непосредственно на сайте.
                    </Text>

                    <Heading size="md" mb="2">
                      Безопасность
                    </Heading>
                    <Text mb="4">
                      Сайт обеспечивает безопасность учетной записи Пользователя
                      от несанкционированного доступа.
                    </Text>

                    <Heading size="md" mb="2">
                      Уведомления об изменениях
                    </Heading>
                    <Text mb="4">
                      Сайт оставляет за собой право вносить изменения в Политику
                      конфиденциальности без дополнительных уведомлений.
                      Нововведения вступают в силу с момента их опубликования.
                      Пользователи могут отслеживать изменения в Политике
                      конфиденциальности самостоятельно.
                    </Text>
                  </Box>
                </ModalBody>

                <ModalFooter>
                  <Button
                    colorScheme="pink"
                    rounded={"full"}
                    mr={3}
                    onClick={onClose}
                  >
                    Закрыть
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <Modal isOpen={isFirstOpen} onClose={onFirstClose} isCentered>
              <ModalOverlay />
              <ModalContent rounded={"25px"} maxW={"400px"}>
                <ModalBody textAlign={"center"} p={8}>
                  <ModalHeader
                    bgColor={"pink.100"}
                    rounded={"full"}
                    fontSize={"lg"}
                    textAlign={"center"}
                    mb={4}
                  >
                    Ваша заявка отправлена!
                  </ModalHeader>
                  <p>С вами скоро свяжутся</p>
                </ModalBody>
                <ModalFooter justifyContent={"center"}>
                  <Button
                    rounded={"full"}
                    bgColor={"pink.300"}
                    onClick={onFirstClose}
                  >
                    Ок
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        </Box>
      </Center>
    </motion.div>
  );
};

export default Form;
