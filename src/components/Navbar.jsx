"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Navlink from "./Navlink";

const Navbar = () => {
  const links = [
    { url: "/", title: "Home" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/about", title: "About" },
    { url: "/contact", title: "Contact" },
  ];

  const [open, setOpen] = useState(false);

  // ANIMATIONS
  const topVariants = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    open: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const listVariants = {
    closed: {
      x: "100vw",
    },
    open: {
      x: "0",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:48 ">
      {/* medium screen */}
      <div className="hidden md:flex gap-5 w-1/3">
        {links.map((link) => (
          <Navlink link={link} key={link.url} />
        ))}
      </div>
      {/* Logo */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-lg bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Webwiz</span>
          <span className="w-20 h-8 rounded bg-white text-black flex items-center justify-center">
            Durrani
          </span>
        </Link>
      </div>
      {/* social links */}
      <div className="hidden md:flex gap-5 w-1/3 justify-end">
        <Link href="https://github.com/hamzashakeel7">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://www.instagram.com/webwi_zdurrani?igsh=MTNubTc3c3J3Nmw4eA%3D%3D">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/hamza-shakeel-6264b3295/">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://www.fiverr.com/durrani_webdev?up_rollout=true">
          <Image src="/fiver.png" alt="" width={30} height={30} />
        </Link>
        <Link href="https://www.upwork.com/freelancers/~01359edd701f1b29c6">
          <Image src="/upwork.png" alt="" width={30} height={30} />
        </Link>
      </div>
      {/* Responsive menu */}
      <div className="md:hidden">
        {/* menu */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "open" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "open" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "open" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* list */}
        {/* list */}
        <div className="">
          {open && (
            <motion.div
              variants={listVariants}
              initial="closed"
              animate="open"
              className="absolute top-0 left-0 w-full h-full bg-black text-white flex items-center justify-center flex-col gap-8 text-3xl z-50"
            >
              <button
                className="absolute top-4 right-4 text-white text-8xl z-50"
                onClick={() => setOpen(false)}
              >
                &times;
              </button>
              {links.map((link) => (
                <motion.div
                  variants={listItemVariants}
                  className=""
                  key={link.url}
                >
                  <Link href={link.url}>{link.title}</Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
