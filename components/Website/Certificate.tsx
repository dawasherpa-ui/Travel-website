import Image from "next/image";

export default () => {
  return (
    <div className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <h3 className="font-semibold text-xl text-gray-600 text-center">
          Our Achivements
        </h3>
        <div className="mt-6">
          <ul className="flex gap-y-6 flex-wrap items-center justify-center [&>*]:px-12 lg:divide-x">
            {/* LOGO 1 */}
            {[1,2,3,4].map((el)=><li className="flex-none">
              <Image
                src="/certificates1.jpg"
                alt="Certificate"
                className="h-32 w-auto object-contain"
                width={1000}
                height={1000}
              />
            </li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};
