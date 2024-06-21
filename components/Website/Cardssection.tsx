"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React, { useState } from "react";
import { Separator } from "../ui/separator";
import Link from "next/link";

export default function CarouselItemCarousel({ title1, title2 }: any) {
  //   const [categories, setCategories] = useState<any>();
  const categories = [
    {
      id: 1,
      title:"Mt.Everest",
      desc:"One of the famous 8k Mountain.",
      image:
        "/award/makalu.jpg",
    },
    {
      id: 1,
      title:"Mt.K2",
      desc:"One of the famous 8k Mountain.",
      image:
        "/award/manaslu.jpg",
    },
    {
      id: 1,
      title:"Mt.Makalu",
      desc:"One of the famous 8k Mountain.",
      image:
        "/award/nanga.jpg",
    },
    {
      id: 1,
      title:"Mt.Kanchanjunga",
      desc:"One of the famous 8k Mountain.",
      image:
        "/award/choyu.jpg",
    },
    {
      id: 1,
      title:"Mt.Choyu",
      desc:"One of the famous 8k Mountain.",
      image:
        "/award/Chogiri.jpg",
    },
  ];

  return (
    <>
      {categories && (
        <div>
          <p className=" text-2xl font-semibold  tracking-wider uppercase  text-primary-500">
            {" "}
            {title1} {""}
            <span className=" text-secondary-900">{title2}</span>{" "}
          </p>
          <div className=" flex mb-4 mt-1">
            <Separator />
          </div>
          <Carousel opts={{ align: "start", loop: false }} className="w-full">
            <CarouselContent className="">
              {categories?.map((category: any, index: any) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/4 hover:-translate-y-1 h-64 w-64 duration-300"
                >
                  <SingleCategoryCard category={category} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className=" ms-20 bg-slate-700 text-white hover:bg-primary-350 hover:text-white" />
            <CarouselNext className=" me-20 bg-slate-700 text-white  hover:bg-primary-350 hover:text-white" />
          </Carousel>
        </div>
      )}
    </>
  );
}

function SingleCategoryCard({ category }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {category && (
        <div className="border border-opacity-10 hover:border-opacity-20 rounded-xl w-full h-full cursor-pointer  ">
          <Link
            href={`/`}
            className="w-full h-full"
          >
            <div className="relative group w-full h-full flex items-end">
              <div className="absolute w-full h-full ">
                <Image
                  src={category.image}
                  alt="img"
                  width={1000}
                  height={1000}
                  //   layout="responsive"
                  objectFit="cover"
                  className="rounded-xl object-cover h-full w-full"
                />
              </div>
              <div></div>
              <div className="pl-4 h-20 w-full group-hover:bg-black group-hover:bg-opacity-30  translate-y-3 group-hover:-translate-y-1 opacity-0 pointer-events-none  group-hover:opacity-100 group-hover:pointer-events-auto duration-500 ">
                <h2 className="text-xl font-semibold  text-white ">{category.title}</h2>
                <p className="text-xs  text-white ">
                {category.desc}
                </p>
              </div>
            </div>
          </Link>
        </div>
      )}
    </>
  );
}
