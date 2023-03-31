import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Canvas from "@/components/canvas";
import TechList from "@/components/techlist";
import Highlight from "@/components/highlight";
import { FaGithub, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-800">
      <div className=" text-white ">
        <div className="container-md mx-auto max-w-2xl bg-dark-800  text-gray-300 font-light ">
          <Navbar />
          <div className="mt-4 px-2 mx-4 py-4 flex justify-center items-center rounded-xl bg-gray-600 opacity-75">
            <p className="text-sm font-normal text-white tracking-wide ">
              3rd-year Informatics Student at ITB, currently seeking an
              internship opportunity
            </p>
          </div>

          <div>
            <div className="relative mt-8 mx-4 h-48 w-48 overflow-hidden">
              <Image
                src="/PP.jpeg"
                alt="Picture of the author"
                width={500}
                height={500}
                className="rounded-full"
              />
            </div>
          </div>

          <div className=" py-2 px-2 mt-4 mx-4">
            <p className="text-justify leading-7">
              Hi, my name is <Highlight>Gilang Pramudya</Highlight>. Im an
              Informatics Student based in Bandung, Indonesia. My primary
              passion lies in developing (and occasionally designing)
              <Highlight>web services</Highlight>, and I take great pride in
              crafting high-quality digital solutions that cater to my clients
              unique requirements.
            </p>
          </div>

          <div className=" py-2 px-2 mt-2 mx-4">
            <p className=" mb-2">
              {" "}
              Here are a few technologies i{"'"}ve used recently :
            </p>
            <TechList />
          </div>

          <div className=" py-2 px-2 mt-2 mx-4 text-gray-300">
            <p className=" mb-2">
              {" "}
              You can find me on{" "}
              <a
                href="https://www.instagram.com/aloysius.gilang/"
                className="text-cyan-100 hover:text-cyan-400"
              >
                Instagram
              </a>{" "}
              and{" "}
              <a
                href="https://github.com/Aloysiusgilang"
                className="text-cyan-100 hover:text-cyan-400"
              >
                Github
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
