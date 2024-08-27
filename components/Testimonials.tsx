"use client";

import { Avatar, Box, chakra, Flex, SimpleGrid } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef, FC } from "react";

// Массив отзывов
const testimonials = [
  {
    name: "Имя",
    color: "var(--color-custom-green)",
    content:
      "Мой кот Барсик провел в этом отеле неделю, и остался очень доволен! Персонал внимательный, условия комфортные, а еда свежая. Обязательно буду пользоваться этим отелем снова.",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
  {
    name: "Имя",
    color: "var(--color-custom-salad)",
    content:
      "Отличный отель для наших пушистых друзей! Мой кот Мурзик чувствовал себя как дома. Большие просторные вольеры, игрушки и даже трансляция любимых передач. Рекомендую всем!",
    avatar:
      "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
  {
    name: "Имя",
    color: "var(--color-custom-purple)",
    content:
      "Кошачий отель оправдал все ожидания! Моя кошечка Маруся провела там 3 дня и вернулась домой довольная и отдохнувшая. Отличный сервис, чистота и индивидуальный подход к каждому питомцу.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
  },
  {
    name: "Имя",
    color: "var(--color-custom-green)",
    content:
      "Отдыхали с котом Васей в этом отеле на выходных. Очень понравилось, как о нем заботились. Регулярные прогулки, вкусное питание и ласковый персонал. Обязательно вернемся сюда снова!",
    avatar:
      "https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
];

// Интерфейс для свойств карточки отзыва
interface TestimonialCardProps {
  name: string;
  color: string;
  content: string;
  avatar: string;
  index: number;
}

// Компонент карточки отзыва
const TestimonialCard: FC<TestimonialCardProps> = ({
  name,
  color,
  content,
  avatar,
  index,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.1, // Задержка анимации на основе индекса
      }}
    >
      <Flex
        bgColor={color}
        maxW={"640px"}
        direction={{ base: "column-reverse", md: "row" }}
        width={"full"}
        rounded={"45px"}
        p={10}
        justifyContent={"space-between"}
        position={"relative"}
        _after={{
          content: '""',
          position: "absolute",
          height: "21px",
          width: "29px",
          left: "35px",
          top: "-10px",
          backgroundSize: "cover",
          backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%239F7AEA'/%3E%3C/svg%3E")`,
        }}
        _before={{
          content: '""',
          position: "absolute",
          zIndex: "-1",
          height: "full",
          maxW: "640px",
          width: "full",
          filter: "blur(40px)",
          transform: "scale(0.98)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          top: 0,
          left: 0,
        }}
      >
        <Flex
          direction={"column"}
          textAlign={"left"}
          justifyContent={"space-between"}
        >
          <chakra.p fontWeight={"medium"} fontSize={"15px"} pb={4}>
            {content}
          </chakra.p>
          <chakra.p fontWeight={"bold"} fontSize={14}>
            {name}
          </chakra.p>
        </Flex>
        <Avatar
          src={avatar}
          height={"80px"}
          width={"80px"}
          alignSelf={"center"}
          m={{ base: "0 0 35px 0", md: "0 0 0 50px" }}
        />
      </Flex>
    </motion.div>
  );
};

// Интерфейс для компонента анимации заголовка
interface AnimatedTextProps {
  text: string;
}

// Компонент анимации заголовка
const AnimatedText: FC<AnimatedTextProps> = ({ text }) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <chakra.h1
      ref={ref}
      fontSize={{
        base: "5xl",
        md: "6xl",
        lg: "8xl",
      }}
      fontWeight={"bold"}
      color="gray.700"
      display="flex"
      justifyContent="center"
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: i * 0.05, // Задержка появления каждой буквы
            type: "spring",
          }}
          style={{ display: "inline-block" }} // Для отображения букв на одной линии
        >
          {char}
        </motion.span>
      ))}
    </chakra.h1>
  );
};

// Основной компонент с отзывами
const Testimonials: FC = () => {
  return (
    <Flex
      className="testimonials"
      textAlign={"center"}
      justifyContent={"center"}
      direction={"column"}
      width={"full"}
      overflow={"hidden"}
    >
      <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin={"auto"}>
        <AnimatedText text="Отзывы" />
      </Box>
      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        spacing={"5"}
        mt={16}
        mb={16}
        mx={"auto"}
      >
        {testimonials.map((cardInfo, index) => (
          <TestimonialCard key={index} {...cardInfo} index={index} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Testimonials;
