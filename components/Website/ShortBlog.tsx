import Image from "next/image";
import React from "react";

function ShortBlog() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  grid-rows-4 md:grid-rows-2 h-auto py-4 md:px-0 md:py-0 md:h-[42rem]  my-40 px-4 shadow-2xl border">
      <div className="col-span-1 row-span-1 h-full w-full ">
        <Image
          src={"/blog/annapurna.jpg"}
          alt="Mountain"
          objectFit="cover"
          width={1000}
          className="object-cover h-full w-full "
          height={1000}
        />
      </div>
      <div className="col-span-1 row-span-1 h-full w-full p-10">
        <h2 className="text-md sm:text-xl md:text-2xl font-semibold border-b-4 pb-2 border-yellow-400 inline">
          Annapurna Region
        </h2>
        <p className="mt-8 text-[10px] sm:text-xs md:text-md pl-2 text-slate-500">
          Annapurna region has been listed as one of the world’s best trekking
          destinations and offers an outstanding overview of trekking in the
          Himalayas. Its winding trails, colorful teahouses, and ever-changing
          views of the mountains make it the perfect walking destination for
          adventurers. The verities of flora and fauna along the trails and the
          trekker-friendly climate make this a truly memorable experience.
        </p>
        <button className="py-2 text-xs px-4 md:py-3 md:text-sm  md:px-4 rounded-full hover:-translate-y-1 duration-300 bg-slate-400 mt-6 ml-2 bg-opacity-50">
          View Tour
        </button>
      </div>
      <div className="col-span-1 row-span-1 h-full w-full p-10">
        <h2 className="text-md sm:text-xl md:text-2xl font-semibold border-b-4 pb-2 border-yellow-400 inline">
          Everest Region
        </h2>
        <p className="mt-8 text-[10px] sm:text-xs md:text-md  pl-2 text-slate-500">
          The Everest region offers once in a lifetime experience for trekkers
          and to see the closest view of the world’s highest mountain in the
          world Mt. Everest. The unique combination of outdoor adventure, vast
          glaciers, local culture, and beautiful villages along the trekking
          trails makes this one of Nepal&apos;s most popular trekking areas. This
          region can be considered a trekker’s paradise as it offers many
          trekking routes.
        </p>
        <button className="py-2 text-xs px-4 md:py-3 md:text-sm  md:px-4 rounded-full hover:-translate-y-1 duration-300 bg-slate-400 mt-6 ml-2 bg-opacity-50">
          View Tour
        </button>
      </div>
      <div className="col-span-1 row-span-1 h-full w-full">
        {" "}
        <Image
          src={"/blog/everest-reason.webp"}
          alt="Mountain"
          objectFit="cover"
          className="object-cover h-full w-full"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}

export default ShortBlog;
