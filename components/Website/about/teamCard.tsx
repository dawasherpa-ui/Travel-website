import Link from "next/link";
import React from "react";

function TeamCard() {
  const data = [1, 2, 3, 4, 5, 6, 7, 1, 1];
  const team = [
    { name: "Tenzing Sherpa", position: "CEO",image:"" },
    { name: "Sonam Lama", position: "CTO",image:"" },
    { name: "Chhiring Sherpa", position: "COO",image:"" },
    { name: "Chhiring Sherpa", position: "UFO",image:"" },
    { name: "Babu Lama", position: "UFC",image:"" },
    { name: "Dawa Sherpa", position: "WWE",image:"" },
    { name: "Dorje Sherpa", position: "IPL",image:"" },
    { name: "Lakpa Sherpa", position: "FFC",image:"" },
    { name: "Pasang Sherpa", position: "INC",image:"" },
  ];
  return (
    <div>
      <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {team.map((el: any, i: number) => (
          <Link
            href={`/`}
            key={i}
            className="w-[280px] mx-auto sm:w-full  hover:bg-gradient-to-r duration-300 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] from-[#3F6DB4] via-[#CE157E] to-[#F57F20]  text-sm md:text-lg   flex-col relative text-zinc-950  cursor-pointer overflow-hidden hover:border-secondary-300 border-primary-100 rounded-xl p-[1px]   flex gap-3 "
          >
            <div className="bg-zinc-50 flex flex-col gap-3 p-3 rounded-xl w-full h-auto">
              <div className="w- h-[10rem]  bg-primary overflow-hidden rounded-xl">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 duration-300 object-center"
                  src={"/team/carousel1.png"}
                  alt={"Mountain View"}
                />
              </div>
              <div className="w-full relative z-20  flex flex-col gap-1 items-center">
                <div className="text-zinc-950 font-medium">{el.name}</div>
                {/* desc  */}
                {/* <div className="text-zinc-700 text-sm  para text-[15px]">
                  CEO
                </div> */}
                <div className="w-full flex font-medium  text-[13px] justify-center ">
                  {/* DATE  */}
                  <div className="text-zinc-600  ">{el.position}</div>

                  {/* CATEGORY  */}
                  {/* <span className="text-zinc-700">#Treeking</span> */}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TeamCard;
