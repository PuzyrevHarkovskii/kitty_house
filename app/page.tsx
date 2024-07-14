import Header from "@/components/Header";
import { ChakraProvider } from "@chakra-ui/react";
import Form from "@/components/Form";
import Contacts from "@/components/Contacts";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <>
      <ChakraProvider>
        <Header />
        <WhyChoose />
        <Form />
        <Contacts />
        <FAQ />

        {/* <Features /> */}
      </ChakraProvider>
    </>
  );
}
