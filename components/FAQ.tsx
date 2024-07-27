"use client";
import { Stack, Box, Heading } from "@chakra-ui/react";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { MinusIcon } from "@chakra-ui/icons";
import { AddIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

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

const FAQ = () => {
  return (
    <div>
      <Box id="FAQ">
        <Stack
          justify={"space-around"}
          spacing={30}
          direction={{ base: "column", md: "row" }}
        >
          <Box px={10}>
            <Heading
              lineHeight={"0.5"}
              fontSize={{
                base: "5xl",
                md: "6xl",
                lg: "8xl",
              }}
            >
              Вопрос —
            </Heading>
            <Heading
              fontSize={{
                base: "5xl",
                md: "6xl",
                lg: "8xl",
              }}
              as={"i"}
              fontFamily={"Work Sans"}
            >
              Ответ
            </Heading>
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
              answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />
            <FAQItem
              question="How do dogs learn in your school?"
              answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />
            <FAQItem
              question="How do mice learn in your school?"
              answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />
            <FAQItem
              question="How do mice learn in your school?"
              answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default FAQ;
