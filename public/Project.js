import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useState } from "react";

function Project({ name }) {
  const router = useRouter();
  const [animating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(!animating);
    router.push("/projectpage");
  };

  return (
    <section className="h-screen  w-full  relative">
      <button
        onClick={handleClick}
        className="h-full w-full flex flex-col items-center justify-center  "
      >
        <motion.div
          whileTap={{ scale: 0.9, zIndex: -1 }}
          className="bg-red-700 h-[45vh] w-[45vh] z-10 "
        ></motion.div>
        <h2 className=" -mt-8 text-7xl md:text-9xl font-light  text-center font-queensTrial">
          {name}
        </h2>
        <motion.p
          animate={{ x: animating ? -100 : 0 }}
          transition={{ duration: 5 }}
          className="tracking-widest capitalize absolute left-[50%]  bottom-[15%]"
        >
          Role: UX Designer
        </motion.p>
      </button>
    </section>
  );
}

export default Project;
