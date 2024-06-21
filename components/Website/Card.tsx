import Link from "next/link";
import React from "react";

function Card() {
  const data = [1, 2, 3, 4, 5, 6, 7, 1, 1];
  return (
    <div>
      <div className="column-1 sm:columns-2 md:columns-3">
      {data.map((el: any, i: number) => (
        <Link
          href={`/`}
          key={i}
          className="w-full  hover:bg-gradient-to-r duration-300 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] from-[#3F6DB4] via-[#CE157E] to-[#F57F20]  text-sm md:text-lg   flex-col relative text-zinc-950  cursor-pointer overflow-hidden hover:border-secondary-300 border-primary-100 rounded-xl p-[1px]   flex gap-3 mb-4"
        >
          <div className="bg-zinc-50 flex flex-col gap-3 p-3 rounded-xl w-full h-auto">
            <div className="w-full h-[15rem]  bg-primary-200 overflow-hidden rounded-xl">
              <img
                className="w-full h-full object-cover group-hover:scale-105 duration-300 object-center"
                src={
                  "/blog/town.jpg"
                }
                alt={"Mountain View"}
              />
            </div>
            <div className="w-full relative z-20  flex flex-col gap-3 items-start">
              <div className="text-zinc-950 font-medium">Lumbini</div>
              {/* desc  */}
              <div className="text-zinc-700 text-sm  para text-[15px]">
              Lumbini, located in the Rupandehi District of Nepal, is renowned as the birthplace of Siddhartha Gautama, who later became known as the Buddha...
              </div>
              <div className="w-full flex font-medium  text-[13px] justify-between items-center">
                {/* DATE  */}
                <div className="text-zinc-600  ">Rupandehi District</div>

                {/* CATEGORY  */}
                <span className="text-zinc-700">#Treeking</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
      </div>
    </div>
  );
}

export default Card;
