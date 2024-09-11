"use client";
import { Stack, Box, Heading } from "@chakra-ui/react";
import React, { useRef } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import { motion, useInView } from "framer-motion";

interface ContactBoxProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<ContactBoxProps> = ({ question, answer }) => {
  return (
    <motion.div
      className="box"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300, damping: 14 }}
    >
      <Accordion py={1} allowMultiple>
        <AccordionItem
          py={"2"}
          borderRadius={"30px"}
          border={"2px"}
          borderColor={"gray.300"}
        >
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton
                  _hover={{
                    borderRadius: "30px",
                  }}
                >
                  <Box fontSize={"lg"} as="span" flex="1" textAlign="left">
                    {question}
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel fontSize={"lg"} pb={4}>
                {answer}
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </motion.div>
  );
};

interface AnimatedTextProps {
  text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true }); // Слежение за видимостью элемента

  return (
    <Heading
      ref={ref}
      lineHeight={"1"}
      fontSize={{
        base: "5xl",
        md: "6xl",
        lg: "8xl",
      }}
      as="h1"
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: i * 0.05, // Задержка появления каждого символа
            type: "spring",
          }}
          style={{ display: "inline-block" }} // Чтобы каждый символ был на одной строке
        >
          {char}
        </motion.span>
      ))}
    </Heading>
  );
};

const FAQ: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div>
      <motion.div
        ref={ref}
        initial={{ scale: 0.6, opacity: 0.3 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Box id="faq">
          <Stack
            justify={"space-around"}
            spacing={30}
            direction={{ base: "column", md: "row" }}
          >
            <Box px={10}>
              <AnimatedText text="Вопрос —" />
              <AnimatedText text="Ответ" />
            </Box>

            <Box
              alignContent="center"
              width={{
                base: "full",
                lg: "2xl",
              }}
            >
              <FAQItem
                question="Правила заселения"
                answer="Мы принимаем только клинически здоровых и стерилизованных животных!
 Важно! Пожалуйста до заселения обработайте Ваше  животное от глистов и блох. Обязательно !!! Прививки от чумы, энтерита, лептоспироза, бешенства, аденовирусной и короновирусной инфекции, гепатита ,вирусного ринотрахеит , кальцивироза, трихофитии , хламидиоза и вакцинировано не менее чем за 2 недели до приезда к нам. В первую очередь это безопасность Вашего животного!"
              />
              <FAQItem
                question="Что понадобится котику в отеле?"
                answer="любимый питомец *
корм на все время проживания 
наполнитель на все время проживания 
совок для кошачьего туалета
мисочки для воды и еды
ПО ЖЕЛАНИЮ:
плед
игрушки
когтеточку
любимые лакомства
В целях гигиены и более быстрой и легкой адаптации котика мы рекомендуем принести все необходимые вещи из дома."
              />
              <FAQItem
                question="Вы можете сами привезти / забрать котика?"
                answer="Для Вашего удобства мы предлагаем услугу «Трансфер» — срочную перевозку Вашего питомца из дома в свои личные апартаменты отеля. Это избавит Вас от лишних хлопот и беспокойства, Услуга платная , без сопровождения . Тариф – стоимость такси.
Строго в переноске предоставляемой хозяином."
              />

              <FAQItem
                question="Моему коту необходимы медицинские процедуры, сможете ли вы их делать?"
                answer="Мы принимаем не только здоровых животных. Стоимость медицинского обслуживания оговаривается индивидуально, поскольку может включать в себя как простой прием лекарств, так и более сложные процедуры. Свяжитесь с нами и мы дадим вам консультацию."
              />

              <FAQItem
                question="Зачем делать прививку домашнему котику? "
                answer="Многие хозяева ошибочно полагают, что если котик или кошечка не покидают квартиру, то они не могут заболеть. К сожалению известно много случаев, когда заболевали те питомцы, которые живут исключительно дома, поскольку бактерии могут переноситься на одежде, особенно на обуви хозяев. Неожиданный визит к врачу без прививок может также оказаться опасным, поскольку в клинику приходят питомцы в том числе с различными заболеваниями. Первоначально комплексная прививка делается два раза с разницей 3-4 недели, далее 1 раз в год. Внимание! Перед вакцинацией необходима обработка от паразитов и блох. Все прививки должны быть отмечены в ветеринарном паспорте."
              />
            </Box>
          </Stack>
        </Box>
      </motion.div>
    </div>
  );
};

export default FAQ;
