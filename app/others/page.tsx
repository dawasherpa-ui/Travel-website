import CarouselItemCarousel from "@/components/Website/Cardssection";
import Team from "@/components/Website/about/Team";
import Expediton from "@/components/Website/feature/Expediton";
import FeaturePage from "@/components/Website/feature/FeaturePage";
import React from "react";

function Page() {
  return (
    <div>
      <FeaturePage />
      <div className="w-full md:w-[80%] m-auto py-10 mt-20">
        <h2 className="text-2xl font-semibold">Available Expeditions</h2>
        <Expediton />
        {/* <CarouselItemCarousel/> */}
      </div>
      <div className="bg-primary-foreground py-28">
        <h1 className="text-2xl font-semibold text-center">Our Experienced Experts</h1>
        <Team />
      </div>
    </div>
  );
}

export default Page;
