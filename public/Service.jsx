import React from "react";
import Services from "./Services";

function Service() {
  return (
    <>
      <div className="my-10">
        <h2 className="text-2xl tracking-widest font-graphik font-light text-center">
          Services
        </h2>
      </div>
      <Services skill="ux design">
        <p className="text-center">
          Maybe an unpopular opinion: the word "passionate" is over-used, so
          I'll rather say that I am a skilled user experience designer and for
          over three years I have learnt the best approach to better user
          experience design - user-centric!
        </p>
      </Services>
      <Services skill="Frontend Dev">
        <p className="text-center">
          Oh...less I forget to add, I am a User Experience designer who codes.
          I love react and tailwind, they are a match made in heaven
        </p>
      </Services>
    </>
  );
}

export default Service;
