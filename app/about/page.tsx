import Card from "@/components/Website/Card";
import Certificate from "@/components/Website/Certificate";
import About from "@/components/Website/about/About";
import Banner from "@/components/Website/about/Banner";
import Chairman from "@/components/Website/about/Chairman";
import Faq from "@/components/Website/about/Faq";
import NumberTick from "@/components/Website/about/NumberTicker";
import Team from "@/components/Website/about/Team";
import TeamCard from "@/components/Website/about/teamCard";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div>
      <Banner  title={"About"} description="Trekking Agencies' Association of Nepal (TAAN) is an umbrella association of trekking agencies in the country. It was established in 1979 by a handful of trekking agency operators who felt it was time to devise sound business principles as well as regulate the sector which was growing by leaps and bounds with every passing year."/>
      <div className="w-full md:w-[70%] m-auto py-4">
        <About />
        <Chairman />
      </div>
      <NumberTick />
      <div className="w-full md:w-[70%] m-auto py-4">
        <h2 className="text-md my-4 sm:text-xl md:text-3xl text-center font-semibold md:my-6">
          Our Team
        </h2>
        <TeamCard />
      </div>
      <Certificate/>
      <div className="bg-primary-foreground py-16 border-b">
      <Faq/>
      </div>
      <div className="bg-primary-foreground py-28">
        <h1 className="text-2xl font-semibold text-center">Our Partners</h1>
        <Team />
      </div>
    </div>
  );
}
