import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Contact from "../public/Contact";
import Project from "../public/Project";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();

  return (
    <div className="">
      <Head>
        <title>My portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <section className="w-[90%] mx-auto">
          <div className="h-screen grid grid-rows-6 sm:grid-cols-6 sm:grid-rows-1  ">
            <div className="bg-red-500 col-start-1 relative col-end-2 row-start-1 row-end-5 sm:col-start-4 sm:col-span-3 sm:row-start-1 sm:row-end-2    ">
              <div className="w-full h-[40%] bottom-0 absolute bg-gradient-to-b from-transparent  to-[#121921]" />
              <img
                src="/1.jpg "
                className="w-full h-full object-cover object-bottom"
              />
            </div>
            <div className="col-start-1  self-center  col-end-2 row-start-4 row-end-7 sm:col-start-1 sm:col-span-3 sm:row-start-1 sm:row-end-2   ">
              <h1 className="text-8xl md:text-9xl lg:text-[10rem] whitespace-nowrap font-queensTrial capitalize">
                I dev & <br /> Design
              </h1>
              <p className="f font-graphik font-light text-lg md:text-2xl">
                Welcome to my space, I am Jonathan a User Experience Designer
                and a React Developer based in Nigeria. Feel free to reach out
                to me about any project
              </p>
            </div>
          </div>
        </section>
        <section className="w-full min-h-screen ">
          <div className="section_title ">
            <h2 className="">Services</h2>
          </div>

          <div>
            <div className="h-screen  flex flex-col items-center justify-center sm:p-8 w-[95%] sm:w-3/4 md:w-2/3 mx-auto ">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-queensTrial mb-8 capitalize">
                ux design
              </h2>
              <p className="text-center">
                Maybe an unpopular opinion: the word "passionate" is over-used,
                so I'll rather say that I am a skilled user experience designer
                and for over three years I have learnt the best approach to
                better user experience design - user-centric!
              </p>
            </div>
          </div>

          <div>
            <div className="h-screen  flex flex-col items-center justify-center sm:p-8 w-full sm:w-3/4 md:w-2/3 mx-auto ">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-queensTrial mb-8 capitalize">
                Frontend dev
              </h2>
              <p className="text-center">
                Oh...less I forget to add, I am a User Experience designer who
                codes. I love react and tailwind, they are a match made in
                heaven
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="section_title">Work</div>
          <Project project="theragist" />
          <Project project="any innovation" />
        </section>
        <section>
          <Contact />
        </section>
      </main>
      {/* <footer className=""></footer> */}
    </div>
  );
}
