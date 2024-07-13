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

interface ContactBoxProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<ContactBoxProps> = ({ question, answer }) => {
  return (
    <Accordion py={1} allowMultiple>
      <AccordionItem
        borderRadius={"30px"}
        border={"2px"}
        borderColor={"gray.300"}
      >
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
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
            <Heading fontSize={"8xl"}>We are</Heading>
            <Heading fontSize={"8xl"} as={"i"} fontFamily={"Work Sans"}>
              often asked
            </Heading>
          </Box>

          <Box alignContent={"center"} width={"xl"}>
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
