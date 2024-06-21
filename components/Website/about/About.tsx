import React from "react";

function About({ title }: any) {
  return (
    <div className="my-4">
      <h1 className="text-4xl mb-2">{title || "Company"}</h1>
      <p>
        Ever felt the Himalayas whisper your name? At Epeak we talk back. We're
        not your typical tour guides we are storytellers of the mountains,
        crafters of unforgettable journeys and children of the Himalayas We are
        Epeak. Scaling legendary peaks, from Everest's crown to discovering the
        ruggedness of the 5000ers. Each climb in Nepal's majestic tapestry is a
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
          <h2 className="text-xl font-semibold mb-2s">#Thing's To Carry</h2>
          <ul className="list-decimal list-inside indent-4">
            <li className="">Always Follow Rules.</li>
            <li className="">Always Follow Rules.</li>
            <li className="">Always Follow Rules.</li>
            <li className="">Always Follow Rules.</li>
          </ul>
        </>
      )}
      <br />
      <p>
        Our community of Adventurers form all over the world! Where it's not
        only about the expeditions; it's about the bonds forged, stories shared,
        and memories made.From cozy gatherings to epeak events, we're a family
        united by passion, offering inspiration, encouragement, and a sense of
        belonging. Ready to turn your adventure dreams into reality? We are your
        Sherpas, your storytellers, your mountain family, on a journey that will
        forever change you.
      </p>
    </div>
  );
}

export default About;
