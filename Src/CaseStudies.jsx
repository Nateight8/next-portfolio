import React from "react";
import { useRouter } from "next/router";
import CaseStudy from "./CaseStudy";

const data = [
  {
    src: "/3.jpg",
    name: "Future X by SK-II",
    role: "ux design",
    work: "Helping SK-II reshape the future of beauty retail experiences, with facial recognition technology, AI and smart sensors.",
  },
  {
    src: "/4.jpg",
    name: "Theragist Socials",
    role: "Visual Designer",
    work: "Helping redesign the looks and experience of theragist, the platform that caters for ones mental health",
  },
  {
    src: "/5.jpg",
    name: "Any-innovation Works",
    role: "ux design",
    work: "Helping SK-II reshape the future of beauty retail experiences, with facial recognition technology, AI and smart sensors.",
  },
  {
    src: "/6.jpg",
    name: "Tertiapp for schools",
    role: "ux design",
    work: "Helping SK-II reshape the future of beauty retail experiences, with facial recognition technology, AI and smart sensors.",
  },
];

function CaseStudies() {
  const router = useRouter();

  const handleClick = () => {
    // setIsAnimating(!animating);
    router.push("/projectpage");
  };

  return (
    <div className="w-full">
      <div className="project_card-wrapper w-full mx-auto ">
        {data.map(({ name, src, work, role }) => (
          <CaseStudy key={name} src={src} name={name} role={role} work={work} />
        ))}
      </div>
    </div>
  );
}

export default CaseStudies;
