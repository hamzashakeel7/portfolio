/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import Brain from "@/components/Brain";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef);

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef);

  return (
    <motion.div
      className="h-full overflow-hidden" // Added overflow-hidden to the root container
      initial={{ y: "-100vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-y-auto lg:flex" ref={containerRef}>
        {" "}
        {/* Changed overflow-y-scroll to overflow-y-auto */}
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64  xl:w-1/2 lg:w-2/3 lg:pr-0">
          {/* BIOGRAPHY */}
          <div className="flex flex-col gap-12 justify-center relative">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg">
              Have been doing freelancing for almost 1 year and have an expert
              grasp on production based projects. Due to rapid IT advancement
              all over the world, I tend to learn web dev with ai.
            </p>
            <span className="italic">
              " In the world of software, the best way to predict the future is
              to invent it. "
            </span>
            {/* SIGN */}
            <div className="self-end mr-5">
              <Image
                className=""
                src="/sign.svg"
                width={150}
                height={50}
                alt=""
              />
              {/* SCROLL SVG */}
              <div>
                <motion.svg
                  className="absolute left-10"
                  initial={{ opacity: 0.2, y: 0 }}
                  animate={{ opacity: 1, y: "10px" }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width={50}
                  height={50}
                >
                  <path
                    d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                    stroke="#000000"
                    strokeWidth="1"
                  ></path>
                  <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                  <path
                    d="M15 11L12 14L9 11"
                    stroke="#000000"
                    strokeWidth="1"
                  ></path>
                </motion.svg>
              </div>
            </div>
          </div>
          {/* SKILLS */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILLS */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              className="flex gap-4 flex-wrap"
              initial={{ x: "-700px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Html, Css
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Nextjs
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind Css
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GSAP
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Wordpress
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <div>
              <motion.svg
                className=""
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
              </motion.svg>
            </div>
          </div>
          {/* EXPERIENCE */}
          <div
            className="flex flex-col gap-12 justify-center"
            ref={experienceRef}
          >
            <motion.h1
              className="font-bold text-2xl"
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <div className="h-full">
              {/* EXPERIENCE LIST ITEM 1 */}

              <div className="flex justify-between h-48">
                {/* LEFT */}
                <motion.div
                  className="w-1/3"
                  initial={{ x: "-300px" }}
                  animate={isExperienceRefInView ? { x: 0 } : {}}
                  transition={{ delay: 0.2 }}
                >
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Lead Developer for HadiTravels
                  </div>
                  <div className="p-3 text-sm italic">
                    Travel agency, used html css and js. Integrated with
                    firebase backend.
                  </div>
                  <div className="p-3 text-sm text-red-400 font-semibold z-10">
                    2024 - April
                  </div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Haditravels.com
                  </div>
                </motion.div>
                {/* CENTER */}
                <div className="w-1/6 flex flex-col items-center justify-center">
                  {/* line */}
                  <div className="w-1 h-full relative bg-gray-600 rounded">
                    {/* line circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>
            </div>

            <div className="">
              {/* EXPERIENCE LIST ITEM 2 */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3"></div>
                {/* CENTER */}
                <div className="w-1/6 flex flex-col items-center justify-center">
                  {/* center line */}
                  <div className="w-1 h-full relative bg-gray-600 rounded flex flex-col gap-10">
                    {/* center line circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <motion.div
                  className="w-1/3"
                  initial={{ x: "-800px" }}
                  animate={isExperienceRefInView ? { x: 0 } : {}}
                  transition={{ delay: 0.9 }}
                >
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelance resturant website
                  </div>
                  <div className="p-2 text-sm italic">
                    Local resturant website, used html css and js. Integrated
                    with firebase backend.
                  </div>
                  <div className="p-3 text-sm text-red-400 font-semibold">
                    2024 - July
                  </div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Burgerb.pk
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="">
              {/* EXPERIENCE LIST ITEM 3 */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <motion.addressdiv
                  className="w-1/3"
                  initial={{ x: "-300px" }}
                  animate={isExperienceRefInView ? { x: 0 } : {}}
                  transition={{ delay: 1.3 }}
                >
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Chaudry group It intern
                  </div>
                  <div className="p-3 text-sm italic ">
                    Developed their website with html css and js, firebase as
                    backend. Handeled all the IT work for company
                  </div>
                  <div className="p-1 text-sm text-red-400 font-semibold">
                    2024 - Feb
                  </div>
                  <div className="p-1 rounded text-sm font-semibold w-fit">
                    https://chaudrygroup.github.io
                  </div>
                </motion.addressdiv>
                {/* CENTER */}
                <div className="w-1/6 flex flex-col items-center justify-center">
                  {/* line */}
                  <div className="w-1 h-full relative bg-gray-600 rounded">
                    {/* line circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>
            </div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-0 z-30">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
