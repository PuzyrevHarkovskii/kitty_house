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
import Testimonials from "@/components/Testimonials";

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

        <Testimonials />
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A23d153b5de5d31e7a0627fc829193ae75dcf400fd32e39aa0cbe410023e66479&amp;source=constructor"
          width="100%"
          height="344"
        ></iframe>
        <Footer />
      </ChakraProvider>
    </>
  );
}
