import Image from "next/image";

export default () => {
  return (
    <div className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <h3 className="font-semibold text-xl text-gray-600 text-center">
          COLLABORATED TEAMS
        </h3>
        <div className="mt-6">
          <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
            {/* LOGO 1 */}
            <li>
              <Image
                src="/award/nma.svg"
                alt="Logo"
                width={1000}
                className="w-16"
                height={1000}
              />
            </li>

            {/* LOGO 2 */}
            <li>
            <Image
                src="/award/nepal-goverment.svg"
                alt="Logo"
                width={1000}
                className="w-16"
                height={1000}
              />
            </li>

            {/* LOGO 3 */}
            <li>
            <Image
                src="/award/ntb.svg"
                alt="Logo"
                width={1000}
                className="w-16"
                height={1000}
              />
            </li>

            {/* LOGO 4 */}
            <li>
            <Image
                src="/award/taan.svg"
                alt="Logo"
                width={1000}
                className="w-16"
                height={1000}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
