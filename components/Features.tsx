import { Grid, GridItem, Box, Stack } from "@chakra-ui/react";
import React from "react";

const Features = () => {
  return (
    <div id="features">
      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={10}>
        <GridItem
          minH={{ base: "700px", md: "400px" }}
          bgColor={"#CCBDF4"}
          borderRadius={"40px"}
          colSpan={{ base: 3, md: 1 }}
          alignSelf="flex-end"
        >
          <Stack></Stack>
        </GridItem>
        <GridItem
          as={Box}
          minH="400px"
          bgColor={"#2BD886"}
          borderRadius={"40px"}
          colSpan={{ base: 1, md: 1 }}
          alignSelf="flex-end"
        ></GridItem>
        <GridItem
          as={Box}
          minH="500px"
          bgColor={"#DBF9B8"}
          borderRadius={"40px"}
          colSpan={{ base: 1, md: 1 }}
          alignSelf="flex-end"
        ></GridItem>
      </Grid>
    </div>
  );
};

export default Features;
