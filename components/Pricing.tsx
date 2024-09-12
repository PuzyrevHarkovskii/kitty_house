import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  // Animations for headings
  const isTitleInView = useInView(titleRef, { once: true });
  const isSubtitleInView = useInView(subtitleRef, { once: true });

  return (
    <div>
      <Container id="pricing" display={"flex"} justifyContent={"center"}>
        <Box>
          <Heading
            fontSize={{
              base: "5xl",
              md: "6xl",
              lg: "8xl",
            }}
          >
            Стоимость
          </Heading>
        </Box>
      </Container>
      <Container maxW="full" display={"flex"} justifyContent={"center"} mt={8}>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{
            base: "5",
            md: "6",
            lg: "20",
          }}
          width="100%"
        >
          <Box
            borderRadius={"45px"}
            flex="1"
            bg="#FFBAF3"
            minH={"100px"}
            color="white"
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="300px"
          >
            <motion.div
              ref={titleRef}
              initial={{ opacity: 0, y: 50 }}
              animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Text
                fontSize={{
                  base: "5xl",
                  md: "6xl",
                  lg: "8xl",
                }}
                fontWeight={"bold"}
              >
                500р
              </Text>
            </motion.div>
          </Box>
          <Box
            border="5px dashed #cecece"
            borderRadius="45px"
            flex="2"
            minH={"100px"}
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="300px"
            // Добавляем анимацию
          >
            <motion.div
              ref={titleRef}
              initial={{ opacity: 0, y: 50 }}
              animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Text
                color={"gray.500"}
                padding={10}
                fontSize={["lg", "lg", "2xl"]}
              >
                Стоимость за один день проживания – 500 рублей, Второй кот
                одного хозяина в один домик +150 рублей. День заезда и день
                выезда животного оплачиваются в полном объеме, независимо от
                времени заселения и выезда.
              </Text>
            </motion.div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};

export default Pricing;
