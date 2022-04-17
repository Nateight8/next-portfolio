import React from "react";
import Services from "./Services";

function Service({ skill, children }) {
  return (
    <div>
      <div className="h-screen  flex flex-col items-center justify-center sm:p-8 w-[95%] sm:w-3/4 md:w-2/3 mx-auto ">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-queensTrial mb-8 capitalize">
          {skill}
        </h2>
        {children}
      </div>
    </div>
  );
}

export default Service;
