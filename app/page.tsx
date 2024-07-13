import Header from "@/components/Header";
import { ChakraProvider } from "@chakra-ui/react";
import Image from "next/image";
import Form from "@/components/Form";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <>
      <ChakraProvider>
        <Header />
        <Form />
        <Contacts />
      </ChakraProvider>
    </>
  );
}
