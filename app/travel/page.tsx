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
      <Banner title={"Travel"} description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            ipsum cumque, possimus nemo iusto quisquam magni debitis dicta iure
            non ab rerum eius." />
      <div className="w-full md:w-[70%] m-auto py-4">
        <h2 className="text-md my-4 sm:text-xl md:text-3xl text-center font-semibold md:my-6">
          Our Travels
        </h2>
        <AboutCard />
      </div>
        <TravelPlan/>
      <div className="w-full md:w-[70%] m-auto py-4">
        <About />
        <Chairman />
      </div>
      <NumberTick />
      <Team />
    </div>
  );
}
