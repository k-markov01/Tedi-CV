import Image from "next/image";

const index = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-20 md:pt-28 pb-12 lg:pb-30 xl:pt-36">
      <div className="container">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            <div>
              <div>
                <h1>Теодора Руменова Маркова</h1>
              </div>
              <h1>Студент по Медицина</h1>
            </div>

          </div>
          <Image
            src={"/images/home/banner/banner-img.jpg"}
            alt="banner-img"
            width={685}
            height={650}
            className="block lg:hidden"
          />
        </div>
      </div>
      <div className="absolute right-0 top-0 hidden h-auto w-1/2 lg:block 2xl:h-171.5 2xl:w-187.5">
        <Image
          src={"/images/home/banner/banner-img.jpg"}
          alt="banner-img"
          width={685}
          height={650}
          className=" absolute right-0 top-0 z-1"
        />
      </div>
    </section>
  );
};

export default index;
