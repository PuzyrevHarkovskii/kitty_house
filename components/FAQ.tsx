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
                question="How do cats learn in your school?"
                answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
              />
              <FAQItem
                question="How do dogs learn in your school?"
                answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
              />
              <FAQItem
                question="How do mice learn in your school?"
                answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
              />
              <FAQItem
                question="How do elephants learn in your school?"
                answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
              />
            </Box>
          </Stack>
        </Box>
      </motion.div>
    </div>
  );
};

export default FAQ;
