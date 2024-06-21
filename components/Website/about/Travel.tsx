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
          {servicesData?.map((item, id: any) => {
            const colorIndex = id % servicesData.length;
            return (
              <div
                // style={{ backgroundColor: `black` }}
                id={id}
                className={`service p-4 w-[320px]  bg-black bg-opacity-20  h-[130px] hover:bg-opacity-40  text-center flex flex-col justify-center items-center  rounded-3xl`}
              >
                <p className="font-bold mb-1 flex gap-1">Time <History size={16}/></p>
                <p className=" text-xs font-medium">32Days</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TravelPlan;
