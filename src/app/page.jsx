"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full overflow-y-hidden"
      initial={{ y: "-100vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:48 lg:flex-row justify-center items-center lg:gap-10">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2">
          <Image
            src="/hero.png"
            alt=""
            width={200}
            height={200}
            className="object-contain flex items-center justify-center m-auto lg:w-10/12 lg:h-2/3 lg:mt-10"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 flex flex-col gap-3 items-center justify-center lg:h-full lg:w-2/3 lg:gap-10">
          <h1 className="font-bold text-4xl md:text-6xl">
            Transforming Pixels into Perfect UX
          </h1>
          <p className="text-sm md:text-lg">
            Specializing in crafting seamless, interactive designs, I elevate
            user experience and bring your vision to life with precision and
            creativity. Let{"'"}s transform your ideas into stunning digital
            realities.
          </p>
          <div className="flex gap-4 lg:w-full">
            <a href="/Resume.pdf" download="Resume.pdf">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                Download Resume
              </button>
            </a>
            <button className="p-4 rounded-lg ring-1 ring-black  text-black text-sm">
              <Link href="/portfolio">View my work</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
