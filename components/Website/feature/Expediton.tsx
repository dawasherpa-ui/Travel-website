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
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function CarouselItemCarousel({ title1, title2 }: any) {
  //   const [categories, setCategories] = useState<any>();
  const categories = [
    {
      id: 1,
      image:
        "/blog/1.jpg",
    },
    {
      id: 1,
      image:
        "/blog/2.jpg",
    },
    {
      id: 1,
      image:
        "/blog/3.jpg",
    },
    {
      id: 1,
      image:
        "/blog/Mountain.jpg",
    },
    {
      id: 1,
      image:
        "/blog/sunlight.jpg",
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
        <a href="/expedition/2">
        <div className="border border-opacity-10 hover:border-opacity-20 rounded-xl w-full h-full cursor-pointer ">
           <div 
        style={{backgroundImage:"url('/blog/view.jpg')"}}
        className=" bg-center bg-cover bg-no-repeat group relative col-span-1  md:block row-span-2 rounded-2xl h-full w-full text-primary-foreground">
          <div className="absolute w-full h-full grid place-items-center rounded-2xl bg-primary opacity-70 transition-opacity duration-500 group-hover:opacity-0">
            <div className="">
            Mt.Everest: 8K expedition
            </div>
          </div>
        </div>
        </div>
        </a>
      )}
    </>
  );
}
