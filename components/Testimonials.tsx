"use client";

import { Avatar, Box, chakra, Flex, SimpleGrid } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef, FC } from "react";

const testimonials = [
  {
    name: "Елена Н.",
    color: "var(--color-custom-green)",
    content:
      "Очень хорошие условия, большие номера, чистота - все для котеек. Очень важно, что не душно, как раз были самые жаркие дни. Мы просто счастливы, что нашли это место. Здесь можно не бояться за ваших пушистиков, они точно будут окружены любовью и теплом ❤️",
    avatar:
      "https://avatars.mds.yandex.net/get-yapic/32838/KueixyuNOf8ZrhqMycVkLBBvp0-1/orig",
  },
  {
    name: "Михаил Г",
    color: "var(--color-custom-salad)",
    content:
      "Прекрасная гостиница для котиков. Каждый свой отпуск оставляем двух наших кошечек. Хозяйка - чудесный человек, каждый день направляет видеоотчет, очень по-доброму, терпеливо относится к животным. Чистота и порядок всегда. ",
    avatar:
      "https://avatars.mds.yandex.net/get-yapic/41409/8ZV7lPREa6NIGThcEXZ8quP6ANM-1/orig",
  },
  {
    name: "Ирина П.",
    color: "var(--color-custom-purple)",
    content:
      "Наша кошечка гостила в Kitty House 7 дней, пока я была в отъезде. Каждый день Елена высылала мне видео-отчёты – мы могли всё время быть на связи. Спасибо огромное Елене и её сыну Владимиру за заботу о кошке! Мы почувствовали настоящее доброе отношение во всём.",
    avatar:
      "https://avatars.mds.yandex.net/get-yapic/57243/3tyz9FC5QJbKNEnuaFtodniJKow-1/orig",
  },
  {
    name: "Владимир С.",
    color: "var(--color-custom-green)",
    content:
      "Оставляли двух котиков на три дня. Очень волновались и мы и котики. Хозяйка очень добродушная и отзывчивая, видно любит животных, помогла котам адаптироваться, регулярно высылала видео. В итоге все успокоились и хорошо провели время. Все остались довольны. Рекомендуем.",
    avatar:
      "https://avatars.mds.yandex.net/get-yapic/54535/a6mARwOr52boJ3E3MIign0Ki77s-1/orig",
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
