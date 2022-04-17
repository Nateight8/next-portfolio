import React from "react";

function Socials() {
  return (
    <section className="w-full h-screen">
      <div className="  py-8  md:py-16 md:mb-16 mb-8 w-[90%] mx-auto">
        <h3 className="text-xl font-graphik mb-2 md:mb-3 font-thin tracking-widest capitalize">
          follow me
        </h3>
        <h2 className=" text-5xl sm:text-7xl font-queensTrial">Socials</h2>
      </div>

      <div className="w-full bg-blue-500 flex flex-col justify-center">
        <h3>Instagram</h3>
        <h3>Github</h3>
        <h3>Dribbble</h3>
        <h3>Twitter</h3>
      </div>
    </section>
  );
}

export default Socials;
