import React from "react";
import Image from "next/image";
import { Heading, Box, Text, HStack } from "@chakra-ui/react";

import Title_logo from "@/public/images/title_star.png";
import Second_image from "@/public/images/second_title.png";
import Third_pictire from "@/public/images/title_picture.png";

const Title = () => {
  return (
    <div>
      <HStack justifyContent={"space-evenly"}>
        <Box>
          <HStack justifyContent={"right"}>
            <Image
              className="mr-5"
              height={"100"}
              alt="Контактный кот_1"
              src={Title_logo}
            />
            <Heading fontSize={"9xl"}>Creative</Heading>
          </HStack>
          <Heading fontSize={"9xl"} as={"i"} fontFamily={"Work Sans"}>
            Kids Academy
          </Heading>
        </Box>
        <Box>
          <Image
            className="image-container"
            height={"290"}
            alt="Контактный кот_1"
            src={Second_image}
          />
        </Box>
      </HStack>
      <HStack pt={5}>
        <Image
          className="mr-5"
          height={"100"}
          alt="Контактный кот_1"
          src={Third_pictire}
        />
        <Text maxW={400}>
          Creative Kids Academy provides a nurturing environment where young
          minds can flourish and explore their artistic talents
        </Text>
      </HStack>
    </div>
  );
};

export default Title;
