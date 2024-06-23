import Image from "next/image";
import React from "react";

function Team() {
  return (
    <div className=" bg-primary-foreground ">
      <div className="w-full md:w-[80%] m-auto h-auto md:h-[16rem] grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-4">
        {[1, 2, 3, 4, 5].map((el, i) => (
          <div className="w-full m-auto flex flex-col gap-3 items-center"
          key={i}>
            <div className="h-20 w-20 ">
              <Image
                src="/blog/tenzing.jfif"
                alt="Team"
                width={1000}
                className="rounded-full"
                height={1000}
              />
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-md font-semibold ">Tenzing Sherpa</h2>
              <span className="text-xs">+97 9802748239</span>
              <span className="text-xs">(Expert Guide)</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
