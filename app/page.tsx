import Header from "@/components/Header";
import { ChakraProvider } from "@chakra-ui/react";
import Form from "@/components/Form";
import Contacts from "@/components/Contacts";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import WhyChoose from "@/components/WhyChoose";
import Title from "@/components/Title";
import Footer from "@/components/Footer";
import Cat from "@/components/cat/Cat";
import { GridPhotos } from "@/components/Carousel";

export default function Home() {
  return (
    <>
      <ChakraProvider>
        {/* <Cat /> */}
        <Header />
        <Title />
        <Features />
        <WhyChoose />
        <Form />
        <FAQ />
        <GridPhotos />
        <Contacts />
        <Footer />
      </ChakraProvider>
    </>
  );
}
