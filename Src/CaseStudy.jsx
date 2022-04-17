import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

// onClick = { handleClick };

function CaseStudy({ name, role, src, work }) {
  const router = useRouter();

  const handleClick = () => {
    // setIsAnimating(!animating);
    router.push("/project");
  };

  return (
    <div className=" mb-20">
      <div onClick={handleClick} className="project_img cursor-pointer ">
        <img
          src={src}
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="mt-6 mb-20 ">
        <div className="role">
          <div className="rule" />
          <p className="text-base ">{role}</p>
        </div>
        <h3 className="text-4xl font-queensTrial mb-3">{name}</h3>
        <p className="role_desc">{work}</p>
      </div>
      <div className="h-[1px] w-full bg-slate-300 opacity-10" />
    </div>
  );
}

export default CaseStudy;
