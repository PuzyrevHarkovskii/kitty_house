import Header from "@/components/Header";
import { ChakraProvider } from "@chakra-ui/react";
import Image from "next/image";
import Form from "@/components/Form";
import Contacts from "@/components/Contacts";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <ChakraProvider>
        <Header />
        <Form />
        <Contacts />
        <FAQ />
      </ChakraProvider>
    </>
  );
}
