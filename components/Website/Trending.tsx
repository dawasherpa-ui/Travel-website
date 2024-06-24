"use client";
import React from "react";
import shipping from "../../public/services/shipping.png";
import happy from "../../public/services/happy.png";
import online from "../../public/services/obline.png";
import promotion from "../../public/services/promotion.png";
import support from "../../public/services/support.png";
import save from "../../public/services/save.png";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function OurServices() {
  return (
    <div className="my-40">
      <h1 className="text-2xl text-center my-4 block  md:hidden">
        Trending Locations
      </h1>
      <div className=" grid grid-cols-2 grid-rows-2 md:grid-rows-4 h-[80vw] sm:h-[24rem] md:h-[28rem] lg:h-[38rem] md:grid-cols-4 gap-2 sm:gap-3 md:gap-6 ">
        <div
          style={{ backgroundImage: "url('/blog/view.jpg')" }}
          className=" bg-center bg-cover bg-no-repeat group relative col-span-1 hidden md:block row-span-2 rounded-2xl h-full w-full text-primary-foreground"
        >
          <div className="absolute w-full h-full grid place-items-center rounded-2xl bg-primary opacity-70 transition-opacity duration-500 group-hover:opacity-0">
            <div className="">
              <Icon icon="mdi:mountain" className="text-4xl" />
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: "url('/blog/sunlight.jpg')" }}
          className=" bg-center bg-cover bg-no-repeat group relative col-span-1 row-span-1  rounded-2xl h-full w-full text-primary-foreground"
        >
          <div className="absolute w-full md:hidden h-full grid place-items-center rounded-2xl bg-primary opacity-70 transition-opacity duration-500 group-hover:opacity-0">
            <div className="">
              <Icon icon="hugeicons:tiktok" className="text-4xl" />
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: "url('/blog/view2.jpg')" }}
          className=" bg-center bg-cover bg-no-repeat group relative col-span-1 row-span-1 rounded-2xl h-full w-full text-primary-foreground"
        >
          <div className="absolute w-full md:hidden h-full grid place-items-center rounded-2xl bg-primary opacity-70 transition-opacity duration-500 group-hover:opacity-0">
            <div className="">
              <Icon icon="hugeicons:tiktok" className="text-4xl" />
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: "url('/blog/climb1.jpg')" }}
          className=" bg-center bg-cover bg-no-repeat group relative hidden md:block col-span-1 row-span-2 rounded-2xl h-full w-full text-primary-foreground"
        >
          <div className="absolute w-full h-full grid place-items-center rounded-2xl bg-primary opacity-70 transition-opacity duration-500 group-hover:opacity-0">
            <div className="">
              <Icon icon="game-icons:mountain-climbing" className="text-4xl" />
            </div>
          </div>
        </div>

        <div className=" group relative col-span-2 hidden  row-span-2 rounded-2xl h-full w-full text-primary-900 shadow-2xl border md:flex flex-col gap-0 sm:gap-3 justify-center items-center p-4 md:p-0">
          <h2 className="text-xs md:text-xl font-bold">
            Our Trending Locations
          </h2>
          <div className="flex gap-1 sm:gap-4">
            <div className="h-10 rounded-full w-10 grid place-items-center bg-secondary-800 ">
              <Icon
                icon="ic:outline-travel-explore"
                className="text-sm sm:text-lg md:text-3xl"
              />
            </div>
            <div className="h-10 rounded-full w-10 grid place-items-center bg-secondary-800 ">
              <Icon
                icon="mdi:mountain"
                className="text-sm sm:text-lg md:text-3xl"
              />
            </div>
            <div className="h-10 rounded-full w-10 grid place-items-center bg-secondary-800 ">
              <Icon
                icon="game-icons:mountain-climbing"
                className="text-sm sm:text-lg md:text-3xl"
              />
            </div>
          </div>
          <div className="text-[10px] sm:text-sm flex flex-wrap  px-4 sm:px-2 gap-0 sm:gap-3 text-secondary-900 font-semibold">
            <span>#Mountain</span>
            <span>#Climbers</span>
            <span>#Treeking</span>
          </div>
        </div>

        <div
          style={{ backgroundImage: "url('/blog/climbing.jpg')" }}
          className=" bg-center bg-cover bg-no-repeat group relative col-span-1 hidden md:block row-span-2 rounded-2xl h-full w-full text-primary-foreground"
        ></div>
        <div
          style={{ backgroundImage: "url('/blog/climb1.jpg')" }}
          className=" bg-center bg-cover bg-no-repeat group relative col-span-1 row-span-2 hidden md:block rounded-2xl h-full w-full text-primary-foreground"
        >
          <div className="absolute w-full h-full grid place-items-center rounded-2xl bg-primary opacity-70 transition-opacity duration-500 group-hover:opacity-0">
            <div className="">
              <Icon icon="mdi:mountain" className="text-4xl" />
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: "url('/blog/town.jpg')" }}
          className=" bg-center bg-cover bg-no-repeat group relative col-span-1 row-span-1 rounded-2xl h-full w-full text-primary-foreground"
        >
          <div className="absolute w-full md:hidden h-full grid place-items-center rounded-2xl bg-primary opacity-70 transition-opacity duration-500 group-hover:opacity-0">
            <div className="">
              <Icon icon="hugeicons:tiktok" className="text-4xl" />
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: "url('/blog/town1.jpg')" }}
          className=" bg-center bg-cover bg-no-repeat group relative col-span-1 row-span-1 rounded-2xl h-full w-full text-primary-foreground"
        >
          <div className="absolute w-full md:hidden h-full grid place-items-center rounded-2xl bg-primary opacity-70 transition-opacity duration-500 group-hover:opacity-0">
            <div className="">
              <Icon icon="hugeicons:tiktok" className="text-4xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
