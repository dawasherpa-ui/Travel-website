import React from "react";

function About({ title }: any) {
  return (
    <div className="my-4">
      <h1 className="text-4xl px-2 md:px-0 mb-2">{title || "Tourio Company"}</h1>
      <p className="px-4 text-xs md:px-0 md:text-sm">
        Ever felt the Himalayas whisper your name? At Epeak we talk back. We&apos;re
        not your typical tour guides we are storytellers of the mountains,
        crafters of unforgettable journeys and children of the Himalayas We are
        Epeak. Scaling legendary peaks, from Everest&apos;s crown to discovering the
        ruggedness of the 5000ers. Each climb in Nepal&apos;s majestic tapestry is a
        unique challenge, a reward waiting to be earned. Whether you crave the
        thrill of Everest or the untamed beauty of Annapurna, our expeditions
        promise an adventure etched to your soul. Behind the expeditions - A
        team of seasoned veterans with over two decades of adventure experience.
        We are your trusted companions ensuring safety, comfort, and pure
        enjoyment every step of the way. Certified, experienced, and
        down-to-earth, we will guide you through the toughest terrains while
        fostering a supportive and fun-loving atmosphere.
      </p>
      <br />
      {title && (
        <>
          <h2 className="text-xl font-semibold mb-2s">#Thing&apos;s To Carry</h2>
          <ul className="list-decimal list-inside indent-4">
            <li className="">Always Follow Rules.</li>
            <li className="">Always Follow Rules.</li>
            <li className="">Always Follow Rules.</li>
            <li className="">Always Follow Rules.</li>
          </ul>
        </>
      )}
      <br />
      <p className="px-4 text-xs md:px-0 md:text-sm">
        Our community of Adventurers form all over the world! Where it&apos;s not
        only about the expeditions; it&apos;s about the bonds forged, stories shared,
        and memories made.From cozy gatherings to epeak events, we&apos;re a family
        united by passion, offering inspiration, encouragement, and a sense of
        belonging. Ready to turn your adventure dreams into reality? We are your
        Sherpas, your storytellers, your mountain family, on a journey that will
        forever change you.
      </p>
    </div>
  );
}

export default About;
