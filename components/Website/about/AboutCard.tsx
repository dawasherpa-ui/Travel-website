import Image from "next/image";
import Link from "next/link";
import React from "react";

function AboutCard() {
  const data = [1, 2, 3, 4, 5, 6, 7, 1, 1];
  return (
    <div>
      <div className="column-1 sm:columns-2 md:columns-3 gap-3">
        {data.map((el: any, i: number) => (
          <div className="border border-opacity-10 hover:border-opacity-20 rounded-xl w-full h-56 cursor-pointer mb-3 "
          key={i}>
            <div className="w-full h-full">
              <div className="relative group w-full h-full flex items-end">
                <div className="absolute w-full h-full ">
                  <Image
                    src={`/blog/peakView.jpg`}
                    alt="img"
                    width={1000}
                    height={1000}
                    //   layout="responsive"
                    objectFit="cover"
                    className="rounded-xl object-cover h-full w-full"
                  />
                </div>
                <div className="pl-4 h-full w-[60%] group-hover:bg-black group-hover:bg-opacity-30  -translate-x-3 rounded-xl group-hover:translate-x-0 opacity-0 pointer-events-none  group-hover:opacity-100 group-hover:pointer-events-auto duration-500 flex flex-col justify-center items-start ">
                  <h2 className="text-xl font-semibold  text-white ">Namche Bazar</h2>
                  <p className="text-xs  text-white ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corporis, sequi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutCard;
