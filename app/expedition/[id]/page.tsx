import Card from "@/components/Website/Card";
import About from "@/components/Website/about/About";
import AboutCard from "@/components/Website/about/AboutCard";
import Banner from "@/components/Website/about/Banner";
import Chairman from "@/components/Website/about/Chairman";
import NumberTick from "@/components/Website/about/NumberTicker";
import Team from "@/components/Website/about/Team";
import TravelPlan from "@/components/Website/about/Travel";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div>
      <Banner
        title={"MT. MANASLU EXPEDITION (8163M)"}
        description="Mt. Manaslu, The 8th highest peak in the world which is elevated at the height of 8,163m (26,781ft) above sea level."
        img="/blog/sunlight.jpg"
      />
      <div className="w-full md:w-[70%] m-auto py-8">
        <h2 className="text-md my-4 sm:text-xl md:text-3xl text-center font-semibold md:my-6">
          Traveling Routes of Mt.Makalu
        </h2>
        <AboutCard />
      </div>
      <TravelPlan />
      <div className="w-full md:w-[70%] m-auto py-4">
        <About title="Thing's to know" />
        {/* <Chairman /> */}
      </div>
      <NumberTick />
      <div className="bg-primary-foreground py-28">
        <h1 className="text-2xl font-semibold text-center">Active Guiders</h1>
        <Team />
      </div>
    </div>
  );
}
