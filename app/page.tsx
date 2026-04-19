
import Banner from "@/components/banner/Banner";
import Brands from "@/components/brand/Brands";
import Content from "@/components/content/Content";
import Expertise from "@/components/expertise/Expertise";
import Footer from "@/components/footer/Footer";

import Hero from "@/components/hero/Hero";


export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Banner></Banner>
      <Expertise></Expertise>
    <Content></Content>
    <Brands></Brands>
    <Footer></Footer>

    </div>
  );
}
