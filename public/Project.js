import React from "react";

function Project({ project }) {
  return (
    <div className="h-screen relative w-full">
      <div className="absolute bo  left-1/2 -translate-x-1/2  bottom-[15%] h-full w-full">
        <div className="bg-red-500 h-[45vh] w-[45vh] absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 "></div>
        <div className="mx-auto w-full flex flex-col items-center absolute bottom-8">
          <h2 className=" -mt-16 text-7xl md:text-9xl  text-center font-queensTrial font-light">
            {project}
          </h2>
          <p className="tracking-widest capitalize whitespace-nowrap">
            Role: UX Designer
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
