import Image from "next/image";
import React from "react";

function Chairman() {
  return (
    <div className="my-12">
      <div className="h-[20rem] mb-6">
        <Image
          src="/blog/tenzing.jfif"
          alt="Chairman"
          width={1000}
          height={1000}
          className="object-cover h-full w-full"
        />
      </div>
      <h1 className=" mb-2 px-4 text-xl md:px-0 md:text-2xl">
        Director&apos;s Message
      </h1>
      <p className="px-4 text-xs md:px-0 md:text-lg">
        We started epeak with a dream to make Nepal a global tourism and
        adventure spot that goes beyound our famous peaks. We want to introduce
        and share the vast depth of Nepali Culture. For this dream we have
        formed together a team boasts over two decades of adventure experience.
        We do this not onlt to ensure your safety but to also exceed your
        expectations. In every step we take, we learn, we grow, and we build not
        only as a company, but as a global community of adventured spirits. For
        epeak, we did not want adventure to be just about summiting peaks and
        living adventures it is also about leaving a positive footprint. That is
        why we proudly partner with the Miss Mongol Foundation, supporting their
        mission to empower underprivileged children through education. Every
        climb you undertake with us becomes a climb towards their brighter
        future.
      </p>
      <br />
      <p className="px-4 text-xs md:px-0 md:text-lg">
        I understand your trust is precious. As Chairperson, I assure you of
        complete transparency and unwavering commitment to ethical practices.
        You deserve a reliable partner, and we strive to be just that : your
        Sherpa, your storyteller and your mountain family.
      </p>
    </div>
  );
}

export default Chairman;
