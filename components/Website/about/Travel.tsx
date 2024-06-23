"use client";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { History } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);
function TravelPlan() {
  const services: any = useRef();
  const [serviceData, setServiceData] = useState([]);

  useGSAP(
    () => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: services.current,
          // markers: true,
          scrub: 3,

          start: "top 70%",
          end: "top 20%",
        },
      });

      t1.from(".service", {
        y: 200,
        opacity: 0,

        duration: 2,
        stagger: 0.5,
        rotate: -5,
      });
    },
    { scope: services }
  );
  const servicesData = [
    {
      color: "#B0B0B0", // Light Grey
    },
    {
      color: "#A0A0A0", // Medium Grey
    },
    {
      color: "#909090", // Dark Grey
    },
    {
      color: "#F5F5F5", // Light Silver
    },
    {
      color: "#E5E5E5", // Silver
    },
    {
      color: "#D5D5D5", // Light Grey
    },
    {
      color: "#C5C5C5", // Medium Grey
    },
    {
      color: "#A9A9A9", // Dark Grey
    },
    {
      color: "#999999", // Darker Grey
    },
    {
      color: "#8B8B8B", // Darkest Grey
    },
  ];
  const data = [
    { title: "Day1", value: "Road to KTM" },
    { title: "Day2", value: "Rest day" },
    { title: "Day3", value: "Travel KTM" },
    { title: "Day4", value: "Preparation" },
    { title: "Day5", value: "Flight to camp1" },
    { title: "Day6", value: "Road to Camp2" },
    { title: "Day7", value: "Road to Camp3" },
    { title: "Day8", value: "Road to Camp4" },
    { title: "Day9", value: "Road to Camp5" },
    { title: "Day10", value: "Road to Camp6" },
    { title: "Day11", value: "Summit of Mount" },
    { title: "Day12", value: "Return to camp" },
    { title: "Day13", value: "Return to camp" },

  ];
  return (
    <div>
      <div
        ref={services}
        id="services"
        className="mt-24 bg-center bg-cover py-16 font-semibold text-white"
        style={{ backgroundImage: "url('/blog/view.jpg')" }}
      >
        <h2 className="text-center text-2xl font-semibold my-4">
          Travel Plans
        </h2>
        <div className="flex  justify-center flex-wrap gap-4  px-20   ">
          {data?.map((item, id: any) => {
            const colorIndex = id % servicesData.length;
            return (
              <div
                // style={{ backgroundColor: `black` }}
                id={id}
                key={id}
                className={`service p-4 w-[320px]  bg-black bg-opacity-20  h-[130px] hover:bg-opacity-40  text-center flex flex-col justify-center items-center  rounded-3xl`}
              >
                <p className="font-bold mb-1 flex gap-1">
                  {item.title} <History size={16} />
                </p>
                <p className=" text-xs font-medium">{item.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TravelPlan;
