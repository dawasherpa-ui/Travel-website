import Image from "next/image";
import React from "react";

function Banner({ title, description, img }: any) {
  return (
    <div>
      <div className="relative h-[90vh] w-full overflow-hidden group">
        {img ? (
          <video className="w-full h-full object-cover " autoPlay loop muted>
            <source
              src={`/video.mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={"/blog/people.jpg"}
            alt="Image"
            className="object-cover w-full h-full brightness-75"
            width={1000}
            height={1000}
          />
        )}
        <div className="absolute top-2/4 h-auto left-0 w-full  md:w-[60%] m-auto  pl-2 md:pl-20 md:group-hover:translate-x-4 transition-transform ease-in-out duration-300">
          <h2 className=" text-white font-bold md:group-hover:translate-x-4 transition-transform ease-in-out duration-300 opacity-80 group-hover:opacity-100 text-2xl md:3xl lg:text-6xl">
            {title}
          </h2>
          <p className="text-white font-semibold md:group-hover:translate-x-8 transition-transform ease-in-out duration-700 opacity-50 group-hover:opacity-100 text-xs md:text-lg">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
