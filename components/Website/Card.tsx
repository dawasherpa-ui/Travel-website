import Link from "next/link";
import React from "react";

function Card() {
  const data = [
    {
      id: 1,
      title: "Lumbini Garden",
      description:
        "Lumbini Garden is a serene and sacred site, believed to be the birthplace of Buddha.",
      location: "Rupandevi",
      tag: "Buddhist Pilgrimage",
      image: "/blog/1.jpg",
    },
    {
      id: 2,
      title: "Maya Devi Temple",
      description:
        "The Maya Devi Temple is an ancient structure marking the exact spot where Buddha was born.",
      location: "Rupandevi",
      tag: "Historical Site",
      image: "/blog/2.jpg",
    },
    {
      id: 3,
      title: "Ashoka Pillar",
      description:
        "The Ashoka Pillar in Lumbini is one of the many pillars erected by Emperor Ashoka, inscribed with his edicts.",
      location: "Rupandevi",
      tag: "Ancient Monument",
      image: "/blog/3.jpg",
    },
    {
      id: 4,
      title: "Lumbini Museum",
      description:
        "The Lumbini Museum houses artifacts and relics related to the life and teachings of Buddha.",
      location: "Rupandevi",
      tag: "Museum",
      image: "/blog/4.jpg",
    },
    {
      id: 5,
      title: "Sacred Garden",
      description:
        "The Sacred Garden in Lumbini is a tranquil area filled with monasteries and meditation centers.",
      location: "Rupandevi",
      tag: "Peaceful Retreat",
      image: "/blog/5.jpg",
    },
    {
      id: 6,
      title: "World Peace Pagoda",
      description:
        "The World Peace Pagoda in Lumbini symbolizes peace and harmony among all people.",
      location: "Rupandevi",
      tag: "Peace Symbol",
      image: "/blog/6.jpg",
    },
    {
      id: 7,
      title: "Royal Thai Monastery",
      description:
        "The Royal Thai Monastery in Lumbini showcases Thai architecture and is a place for meditation.",
      location: "Rupandevi",
      tag: "Cultural Site",
      image: "/blog/7.jpg",
    },
    {
      id: 8,
      title: "Myanmar Golden Temple",
      description:
        "The Myanmar Golden Temple is one of the oldest structures in Lumbini, reflecting Burmese culture.",
      location: "Rupandevi",
      tag: "Cultural Landmark",
      image: "/blog/8.jpg",
    },
    {
      id: 9,
      title: "Korean Temple",
      description:
        "The Korean Temple in Lumbini is a modern structure that provides a glimpse into Korean Buddhist traditions.",
      location: "Rupandevi",
      tag: "Cultural Heritage",
      image: "/blog/9.jpg",
    },
  ];

  return (
    <div>
      <div className="column-1 sm:columns-2 md:columns-3">
        {data.map((el: any, i: number) => (
          <Link
            href={`/`}
            key={i}
            className="w-full  hover:bg-gradient-to-r duration-300 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] from-[#3F6DB4] via-[#CE157E] to-[#F57F20]  text-sm md:text-lg   flex-col relative text-zinc-950  cursor-pointer overflow-hidden hover:border-secondary-300 border-primary-100 rounded-xl p-[1px]   flex gap-3 mb-4"
          >
            <div className="bg-zinc-50 flex flex-col gap-3 p-3 rounded-xl w-full h-auto">
              <div className="w-full h-[15rem]  bg-primary-200 overflow-hidden rounded-xl">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 duration-300 object-center"
                  src={"/blog/town.jpg"}
                  alt={"Mountain View"}
                />
              </div>
              <div className="w-full relative z-20  flex flex-col gap-3 items-start">
                <div className="text-zinc-950 font-medium">{el.title}</div>
                {/* desc  */}
                <div className="text-zinc-700 text-sm  para text-[15px]">
                  {el.description}
                </div>
                <div className="w-full flex font-medium  text-[13px] justify-between items-center">
                  {/* DATE  */}
                  <div className="text-zinc-600  ">{el.location}</div>

                  {/* CATEGORY  */}
                  <span className="text-zinc-700">#{el.tag}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Card;
