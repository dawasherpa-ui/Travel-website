import Image from "next/image";
import React from "react";

function Banner({ title, description, img }: any) {
  return (
    <div>
      <div className="relative h-[90vh] w-full overflow-hidden group">
        {img ? (
          <video className="w-full object-cover " autoPlay loop muted>
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
        <div className="absolute top-2/4 h-auto left-0  w-[60%] m-auto pl-20 group-hover:translate-x-4 transition-transform ease-in-out duration-300">
          <h2 className="text-6xl text-white font-bold group-hover:translate-x-4 transition-transform ease-in-out duration-300 opacity-80 group-hover:opacity-100">
            {title}
          </h2>
          <p className="text-white font-semibold group-hover:translate-x-8 transition-transform ease-in-out duration-700 opacity-50 group-hover:opacity-100">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
