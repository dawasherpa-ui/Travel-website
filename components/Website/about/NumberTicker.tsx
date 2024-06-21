import NumberTicker from "@/components/magicui/number-ticker";
import React from "react";

function Number() {
  return (
    <div className=" bg-primary-foreground ">
    <div className="w-full md:w-[60%] m-auto h-[16rem] flex gap-4">
      {[1,2,3,4,5].map((el,i)=><div className="w-full m-auto flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">Since</h2>
        <span className="text-lg">
          <NumberTicker value={1998} />
        </span>
      </div>)}
    </div>
    </div>
  );
}

export default Number;
