import React from "react";

function HeroComp() {
  return (
    <div className="h-screen grid grid-rows-6 sm:grid-cols-6 sm:grid-rows-1  ">
      <div className="bg-red-500 col-start-1 relative col-end-2 row-start-1 row-end-5 sm:col-start-4 sm:col-span-3 sm:row-start-1 sm:row-end-2    ">
        <div className="w-full h-[40%] bottom-0 absolute bg-gradient-to-b from-transparent  to-[#121921]" />
        <img
          src="/1.jpg "
          className="w-full h-full object-cover object-bottom"
        />
      </div>
      <div className="col-start-1  self-center  col-end-2 row-start-4 row-end-7 sm:col-start-1 sm:col-span-3 sm:row-start-1 sm:row-end-2   ">
        <h1 className="text-8xl md:text-9xl lg:text-[10rem] whitespace-nowrap font-queensTrial capitalize">
          I dev & <br /> Design
        </h1>
        <p className="f font-graphik font-light text-lg md:text-2xl">
          Welcome to my space, I am Jonathan a User Experience Designer and a
          React Developer based in Nigeria. Feel free to reach out to me about
          any project
        </p>
      </div>
    </div>
  );
}

export default HeroComp;

// <section className="w-full min-h-screen ">
//   <div className="text-2xl font-graphik font-thin capitalize text-center my-10 bg-red-800 py-2">
//     services
//   </div>
//   <div className="h-screen border-2 border-slate-200 flex flex-col items-center justify-center sm:p-7 w-full sm:w-3/4 md: mx-auto ">
//     <h2 className="text-4xl sm:text-5xl md:text-7xl font-queensTrial mb-8 ">
//       UX Designer
//     </h2>
//     <p className="text-center">
//       Maybe an unpopular opinion: the word "passionate" is over-used, so
//       I'll rather say that I am a skilled user experience designer and
//       for over three years I have learnt the best approach to better
//       user experience design - user-centric!
//     </p>
//   </div>
// </section>
