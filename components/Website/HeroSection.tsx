"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { EmblaOptionsType } from "embla-carousel";
import Hero1 from '@/public/blog/campNice.jpg'
import Hero2 from '@/public/blog/camp1.jpg'
import Hero3 from '@/public/blog/camp2.jpg'
import Hero4 from '@/public/blog/Yak.jpg'
import { list } from "postcss";
export default function HeroCarousel() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="  "
    >
      <CarouselContent>
        {lists.map((item, index) => (
          <CarouselItem
            key={index}
            className={`flex items-center  h-screen bg-center bg-cover `}
            style={{backgroundImage: `url("${item.image}")`}}
         >
            <div className="  space-y-2 md:space-y-4 px-14">
              <p className=" text-xs  md:text-2xl font-medium tracking-wider text-white">
                {item.title}
              </p>
              <p className="text-xl md:text-5xl font-bold tracking-wider text-white">
                {item.h1}
              </p>
              <p
                className={`text-white text-xl  md:text-6xl font-bold tracking-wider text-opacity-90`}
              >
                {item.h2}
              </p>
              <p className=" tracking-wider text-white">{item.desc}</p>
              <button className="py-3 px-5 rounded-full bg-slate-100 bg-opacity-50">
                View Tour
              </button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" ms-14" />
      <CarouselNext className=" me-14" />
    </Carousel>
  );
}

const lists = [
  {
    title: "Unleash Your Spirit",
    h1: "Live the Adventure",
    image:"/blog/campNice.jpg",
    h2: "Seek the Thrill",
    h2color: "text-pink-500",
    desc: "Seek the Thrill Right Now!",
    bgcolor: "text-green-50",
  },
  {
    title: "Adventure Awaits",
    h1: "Find Your Path",
    image:"/blog/camp1.jpg",
    h2: "Embrace the Wild",
    h2color: "text-pink-500",
    desc: "Seek the Thrill Right Now!",
    bgcolor: "text-green-50",
  },
  {
    title: "Journey Together",
    h1: "Step into the Unknown",
    image:"/blog/camp2.jpg",
    h2: "Unleash Your Spirit",
    h2color: "text-pink-500",
    desc: "Seek the Thrill Right Now!",
    bgcolor: "text-green-50",
  },

  {
    title: "Experience Nature's Best",
    h1: "Nature Beckons",
    image:"/blog/campNice.jpg",
    h2: "Explore Beyond Limits",
    h2color: "text-green-500",
    desc: "Seek the Thrill Right Now!",
    bgcolor: "text-teal-50",
  },

  {
    title: "Conquer Every Peak",
    h1: "Chart Your Course",
    image:"/blog/Yak.jpg",
    h2: "Wander Freely",
    h2color: "text-teal-500",
    desc: "Seek the Thrill Right Now!",
    bgcolor: "text-pink-50",
  },
];
