import React from "react";
import { motion } from "framer-motion";

function projects() {
  return (
    <main className="h-[300vh]">
      <section className=" h-screen md:h-[105vh]  w-full relative">
        <div className="h-full w-full flex flex-col items-center justify-center  ">
          <motion.div
            initial={{
              height: "45vh",
              width: "45vh",
            }}
            animate={{
              width: "100%",
              height: "80vh",
              translateY: 600,
            }}
            transition={{
              duration: 2,
            }}
            className="bg-red-500 z-10 "
          ></motion.div>
          <motion.h2
            animate={{ scale: 0.5, translateY: -300 }}
            transition={{ duration: 2 }}
            className=" -mt-8 text-7xl md:text-9xl font-light   font-queensTrial whitespace-nowrap"
          >
            Any-Innovation
          </motion.h2>
          <motion.p
            animate={{ y: -330, opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 2, ease: "backInOut", delay: 2 }}
            className=" text-base hidden lg:inline-block md:w-[50%] "
          >
            As part of its global innovation journey to transform beauty retail
            experiences, SK-II has launched a Smart Store powered by AI, facial
            recognition technology and skin scans. The Smart Store allows
            costumers to interact with multiple personalized and immersive
            experiences to help them get more familiar with the products and
            recommend beauty treatments. I was involved in the concept and
            design of the Skin Scan Station, that helps customers get an
            in-depth skin analysis and determine the age of their skin.
          </motion.p>
          <motion.p
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5, delay: 3.5, ease: "backOut" }}
            className="tracking-widest capitalize absolute text-base top-[70%] left-8 "
          >
            Role: UX Designer
          </motion.p>
        </div>
      </section>
    </main>
  );
}
// absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2
// absolute  left-1/2 -translate-x-1/2  bottom-[15%]
export default projects;
