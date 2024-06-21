import BrandDisplay from "@/components/Website/BrandDisplay";
import Card from "@/components/Website/Card";
import CarouselItemCarousel from "@/components/Website/Cardssection";
import HeroCarousel from "@/components/Website/HeroSection";
import { MarqueeDemo } from "@/components/Website/Marquee";
import MountRange from "@/components/Website/MountRange";
import MountRangeMobile from "@/components/Website/MountRangeMobile";
import ShortBlog from "@/components/Website/ShortBlog";
import OurServices from "@/components/Website/Trending";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HeroCarousel />
      <div className=" w-full md:w-[90%] mx-auto space-y-16 px-4 md:px-0 my-16">
        <BrandDisplay />
        <CarouselItemCarousel title1="Trending" title2="Expdition & Treekings" />
        <div className="">
          <ShortBlog />
        </div>
      </div>
      <div>
        <MountRange />
        <MountRangeMobile />
      </div>
      <div className=" w-full md:w-[90%] mx-auto space-y-16 px-4 md:px-0 my-16">
        <OurServices />
        <h2 className="text-md my-4 sm:text-xl md:text-3xl text-center font-semibold md:my-6">
          Our Travels
        </h2>
        <Card />
        <MarqueeDemo />
      </div>
    </div>
  );
}
