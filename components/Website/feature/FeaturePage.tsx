export default function FeaturePage() {
  return (
    <section
      className="h-[30rem] grid place-items-center bg-cover bg-center text-white bg-blend-multiply bg-gray-400 bg-opacity-60 "
      style={{ backgroundImage: "url('/blog/view2.jpg')" }}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
        <div className="max-w-xl md:mx-auto">
          <h3 className=" text-3xl font-semibold sm:text-4xl">
            Adventure Awaits Pack Your Dreams.
          </h3>
          <p className="mt-3 ">
          Immerse yourself in the beauty of the great outdoors with our expertly curated trekking adventures. Whether you are a seasoned trekker or a beginner looking to explore the world on foot, we have the perfect trail for you.
          </p>
        </div>
        <div className="flex gap-3 items-center mt-4 md:justify-center">
          <a
            href="/contact"
            className="inline-block py-2 px-4 text-white font-medium bg-gray-800 bg-opacity-70 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none text-xs md:text-lg"
          >
            Get started
          </a>
          <a
            href="/contact"
            className="inline-block py-2 px-4 text-gray-800 bg-white bg-opacity-30 font-medium duration-150 border hover:bg-gray-50 active:bg-gray-100 rounded-lg text-xs md:text-lg"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
