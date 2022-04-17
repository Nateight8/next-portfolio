import React from "react";
import { motion } from "framer-motion";

function projectpage() {
  return (
    <>
      <main className="h-[400vh] overflow-hidden">
        <section className="w-full h-screen relative">
          <div className=" p-6  md:px-[20%]   sm:bgte-400 lg:px-[25%] h-[80vh] flex flex-col justify-center items-start">
            <h2 className="  text-5xl mb-4 md:text-7xl  font-queensTrial whitespace-nowrap">
              Future X by SK-II
            </h2>
            <p className="text-lg   opacity-80">
              As part of its global innovation journey to transform beauty
              retail experiences, SK-II has launched a Smart Store powered by
              AI, facial recognition technology and skin scans.
            </p>
          </div>
          <motion.div
            initial={{ height: "70vh", width: "90%", y: "-110%", x: "5%" }}
            animate={{
              height: "100vh",
              width: "100%",
              y: 0,
              x: 0,
              rotate: [0, -2, 1, 0, -1, 2, 0],
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="w-full h-[100vh] bg-red-900 top-[80%] -20 absolute z-20 "
          >
            <img
              src="/4.jpg"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </section>
      </main>
      {/* <footer className="bg bg-slate-800 h-screen w-full grid grid-cols-2 ">
        <div className="flex justify-center items-center">prev</div>{" "}
        <div className="flex justify-center items-center">next</div>
      </footer> */}
    </>
  );
}

export default projectpage;
