import NumberTicker from "@/components/magicui/number-ticker";
import React from "react";

function Number() {
  const about = [
    { name: "Since", value: 1998, plus: false },
    { name: "Summits", value: 200, plus: true },
    { name: "Countries", value: 100, plus: true },
    { name: "Climbers", value: 500, plus: true },
    { name: "Awards", value: 20, plus: true },
    { name: "Success", value: 200, plus: true },
  ];
  const time = [
    { name: "Days", value: 30, plus: false },
    { name: "Summits", value: 200, plus: true },
    { name: "Countries", value: 100, plus: true },
    { name: "Climbers", value: 500, plus: true },
    { name: "Awards", value: 20, plus: true },
    { name: "Success", value: 200, plus: true },
  ];
  return (
    <div className=" bg-primary-foreground ">
      <div className="w-full md:w-[80%] m-auto h-auto  md:h-[16rem] flex flex-wrap md:flex-nowrap gap-6 py-10">
        {about.map((el, i) => (
          <div
            className="w-[200px] md:w-full m-auto flex flex-col items-center  gap-3"
            key={i}
          >
            <h2 className="text-lg md:text-xl lg:2xl font-semibold">{el.name}</h2>
            <span className="text-sm md:text-lg">
              <NumberTicker value={el.value} />
              {el.plus && "+"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Number;
