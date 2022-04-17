import React from "react";

function Heading({ title, subtitle, children }) {
  return (
    <div>
      <section className="case_study-section w-[90%] mx-auto">
        <div className="  py-8  md:py-16 md:mb-16 mb-8">
          <h3 className="text-xl font-graphik mb-2 md:mb-3 font-thin tracking-widest capitalize">
            {subtitle}
          </h3>
          <h2 className=" text-5xl sm:text-7xl font-queensTrial">{title}</h2>
        </div>
        {children}
      </section>
    </div>
  );
}

export default Heading;
