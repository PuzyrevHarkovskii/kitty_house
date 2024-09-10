import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  keyframes,
} from "@chakra-ui/react";
import React from "react";

const Pricing = () => {
  const borderAnimation = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 0;
  }
`;
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
            <Text color={"gray.500"} fontSize="2xl">
              Текст про стоимость
            </Text>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};

export default Pricing;
