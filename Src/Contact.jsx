import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

function Contact() {
  const route = useRouter();

  return (
    <section>
      <div className=" w-[90%] md:w-[45rem] h-screen   mx-auto flex flex-col items-center justify-center">
        <div className=" flex flex-col items-center mb-10">
          <h3 className="text-5xl sm:text-7xl font-queensTrial">
            Get in touch
          </h3>
          <p className="text-center font-graphik font-light  opacity-80">
            I’ll be happy to discuss new opportunities. Feel free to reach out
            to me any time. I prefer to talk over email, especially since we may
            be a few time zones away. Let’s get in touch!
          </p>
        </div>
        <div className="flex justify-center items-center flex-wrap capitalize w-full">
          <motion.p
            whileHover={{ scale: 1.1, rotate: [0, 3, -3, 0] }}
            className="text-center  py-1 my-1  px-4 font-queensTrial font-normal tracking-wide text-base md:text-2xl cursor-pointer"
          >
            Instagram
          </motion.p>
          <motion.p
            whileHover={{ scale: 1.1, rotate: [0, 3, -3, 0] }}
            className="text-center  py-1 my-1  px-4 font-queensTrial font-normal tracking-wide text-base md:text-2xl cursor-pointer"
          >
            Github
          </motion.p>
          <motion.p
            whileHover={{ scale: 1.1, rotate: [0, 3, -3, 0] }}
            className=" text-center py-1 my-1  px-4 font-queensTrial font-normal tracking-wide text-base md:text-2xl cursor-pointer"
          >
            Dribbble
          </motion.p>
          <motion.p
            whileHover={{ scale: 1.1, rotate: [0, 3, -3, 0] }}
            className="text-center  py-1 my-1  px-4 font-queensTrial font-normal tracking-wide text-base md:text-2xl cursor-pointer"
          >
            email
          </motion.p>
          <motion.p
            whileHover={{ scale: 1.1, rotate: [0, 3, -3, 0] }}
            className="text-center  py-1 my-1  px-4 font-queensTrial font-normal tracking-wide text-base md:text-2xl cursor-pointer"
          >
            resume
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
