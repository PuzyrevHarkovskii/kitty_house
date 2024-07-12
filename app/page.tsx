import Header from "@/components/Header";
import { ChakraProvider } from "@chakra-ui/react";
import Image from "next/image";
import Form from "@/components/Form";

export default function Home() {
  return (
    <>
      <ChakraProvider>
        <Form />
      </ChakraProvider>
    </>
  );
}
