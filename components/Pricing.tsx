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
          spacing={16}
          width="100%"
        >
          <Box
            borderRadius={"35px"}
            flex="1"
            bg="#FFBAF3"
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
            >
              500р
            </Text>
          </Box>
          <Box
            border="5px dashed #cecece"
            borderRadius="35px"
            flex="2"
            bg="gray.100"
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
