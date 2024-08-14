/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  const [count, setCount] = useState(0);

  const items = [
    {
      id: 1,
      color: "from-red-300 to-blue-300",
      title: "HadiTravels.com",
      desc: "Collaborated on a group project for a travel agency client, handling the front-end development. Used HTML and CSS for design, and JavaScript for logic, incorporating Swiper.js for sliders and custom loaders. Achieved a unique look with a promising color combination, exceeding client expectations.",
      img: "/portfolio2.png",
      link: "https://www.haditravels.com/",
    },
    {
      id: 2,
      color: "from-blue-300 to-violet-300",
      title: "Resturant BurgerB.pk",
      desc: "Revamped the entire website with a new look and feel, ensuring full responsiveness and custom-designed pages. Utilized HTML and CSS for design and ES6 Vanilla JavaScript for functionality. Employed media queries for responsiveness across various devices, adding minimalistic details with parallax effects and footer animations. Custom domain and hosted on GitHub.",
      img: "/portfolio3.png",
      link: "http://www.burgerb.pk",
    },
    {
      id: 3,
      color: "from-violet-300 to-purple-300",
      title: "Cafe12oclock Resturant",
      desc: "Created the website as a learning project using HTML, custom CSS, and JavaScript for efficient results. Integrated parallax effects and modern design elements. Hosted on GitHub Pages.",
      img: "/portfolio1.png",
      link: "https://www.cafe12oclock.com",
    },
    {
      id: 4,
      color: "from-purple-300 to-red-300",
      title: "Chaudhry Group",
      desc: "Developed the entire website for a property agency using HTML, custom CSS, and JavaScript for fast and elegant results. Hosted the static website on GitHub Pages",
      img: "/portfolio5.png",
      link: "https://chaudrygroup.github.io",
    },
  ];

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-100vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-center text-4xl md:text-6xl lg:text-8xl flex-col">
          <Image
            onClick={() => setCount(count + 1)}
            key={count}
            src="/wizard.svg"
            alt=""
            width={250}
            height={0}
            className="z-0"
          />
          My Works
          {/* SCROLL SVG */}
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
        {/* PROJECTS */}
        <div className="top-0 sticky flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x: x }} className="flex">
            <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r to-red-300 from-purple-300" />
            {items.map((item) => (
              <div
                className={`w-screen h-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-black p-20">
                  <h1 className="text-xl md:text-4xl lg:text-6xl xl:text-8xl font-bold">
                    {item.title}
                  </h1>
                  <div className="relative w-72 h-40 md:w-96 md:h-66 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[320px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] xl:w-[600px] lg:text-lg text-sm ">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end w-8/12">
                    {" "}
                    <button className="p-2 md:p-4 text-sm md:text-base lg:p-6 lg:text-lg bg-white text-gray-600 font-semibold rounded hover:bg-black hover:text-white">
                      See Demo
                    </button>{" "}
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      {/* HIRING CONTAINER */}
      <div className="w-screen h-screen relative">
        {/* <Image
          className="object-cover opacity-80"
          alt=""
          fill
          src="/portfolio-bg.jpg"
        /> */}
        <div className="w-screen h-screen flex gap-0 flex-col items-center justify-center text-center">
          <h1 className="z-20 text-2xl text-black font-bold lg:text-8xl lg:">
            Seeking a frontend sorcerer for your Projects ?
          </h1>
          <div className="relative ">
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              viewBox="0 0 300 300"
              className="w-52 h-52"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                />
              </defs>
              <text fill="#000">
                <textpath
                  xlinkHref="#circlePath"
                  className="text-lg lg:text-xl font-semibold"
                >
                  Front-end developer and UI designer
                </textpath>
              </text>
            </motion.svg>
            <Link
              href="/contact"
              className="w-36 h-36 md:w-28 md:h-28 absolute top-0 left-0 bottom-0 right-0 m-auto bg-black text-white rounded-full items-center justify-center flex z-30"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default portfolio;
