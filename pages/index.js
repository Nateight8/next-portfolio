import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import CaseStudies from "../Src/CaseStudies";
import Contact from "../Src/Contact";
import Heading from "../Src/Heading";
import Image from "next/image";
import HeroComp from "../Src/HeroComp";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();

  return (
    <div className=" ">
      <Head>
        <title>My portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="  ">
        <HeroComp />

        <Heading title="Case Study" subtitle="selected">
          <CaseStudies />
        </Heading>

        <Contact />
      </main>
      {/* <footer className=""></footer> */}
    </div>
  );
}
