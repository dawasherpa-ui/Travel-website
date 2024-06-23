import NumberTicker from "@/components/magicui/number-ticker";
import React from "react";

function Number() {
  const about = [
    { name: "Since", value: 1998 },
    { name: "Summits", value: 200 },
    { name: "Countries", value: 100 },
    { name: "Climbers", value: 500 },
    { name: "Awards", value: 20 },
    { name: "Success", value: 200 },
  ];
  const time = [
    { name: "Days", value: 30 },
    { name: "Summits", value: 200 },
    { name: "Countries", value: 100 },
    { name: "Climbers", value: 500 },
    { name: "Awards", value: 20 },
    { name: "Success", value: 200 },
  ];
  return (
    <div className=" bg-primary-foreground ">
      <div className="w-full md:w-[80%] m-auto h-auto  md:h-[16rem] flex flex-wrap md:flex-nowrap gap-6 py-10">
        {about.map((el, i) => (
          <div className="w-[200px] md:w-full m-auto flex flex-col items-center  gap-3"
          key={i}>
            <h2 className="text-lg md:text-2xl font-semibold">{el.name}</h2>
            <span className="text-sm md:text-lg">
              <NumberTicker value={el.value} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Number;
