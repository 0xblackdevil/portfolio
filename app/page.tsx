"use client";
import Link from "next/link";
import MarqueText, { marqueeVariants } from "./components/marque";
import Navbar from "./components/navbar";
import { projects } from "./utils/project.utils";
import IntroScreen from "./components/intro_animation";
import Contact from "./components/contact";
import AnimatedText from "./components/text.animation";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { motion, useScroll } from "framer-motion";
import { certificates } from "./utils/certificate.utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import HeroWrapper from "./components/top-sticky-wrapper";
import Projects from "./components/projects";
import Certificates from "./components/certificates";

export default function Home() {
  const projectContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: projectContainer,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="page-wraper relative">
      <div className="loader">
        <IntroScreen />
      </div>
      <div className="navbar-component z-40 w-screen bg-transparent px-12 py-4 fixed overflow-hidden">
        <Navbar />
      </div>
      <main className="main-wraper">
        <aside className="about-component fixed z-50">
          <div className="w-3/5 min-w-screen flex flex-col gap-12 p-10 "></div>
        </aside>
        <div className="top-sticky-wrapper z-0 sticky top-0">
          <HeroWrapper />
        </div>
        <section className="projects z-40">
          <Projects />
        </section>
        <div className="bottom-sticky-wrapper z-20 sticky top-0">
          <div className="state-section z-10 relative">
            <Certificates />
          </div>
          <div className="bottom-0 sticky block overflow-hidden">
            <Contact />
          </div>
        </div>
      </main>
    </div>
  );
}
