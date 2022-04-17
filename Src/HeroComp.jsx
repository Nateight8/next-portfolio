import React from "react";
import Image from "next/image";

function HeroComp() {
  return (
    <section className="w-[90%] mx-auto">
      <div className="h-screen grid grid-rows-6 sm:grid-cols-6 sm:grid-rows-1  ">
        <div className=" col-start-1  self-center  col-end-2 row-start-4 row-end-7 sm:col-start-1 sm:col-span-4 z-30 sm:row-start-1 sm:row-end-2  ">
          <h1 className=" text-8xl md:text-9xl lg:text-[10rem] whitespace-nowrap font-queensTrial capitalize">
            I dev & <br /> Design
          </h1>
          <p className="f font-graphik font-light text-lg md:text-2xl md:w-[80%]">
            Welcome to my space, I am Jonathan a User Experience Designer and a
            React Developer based in Nigeria. Feel free to reach out to me about
            any project
          </p>
        </div>
        <div className="bg-red-700 col-start-1 relative col-end-2 row-start-1 row-end-5 sm:col-start-4 sm:col-span-3 sm:row-start-1 sm:row-end-2    ">
          <div className=" z-10 w-full h-[40%] bottom-0 absolute bg-gradient-to-b from-transparent  to-[#121921]" />
          <Image
            src="/1.jpg "
            className="w-full h-full object-cover object-bottom"
            alt=""
            layout="fill"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroComp;
