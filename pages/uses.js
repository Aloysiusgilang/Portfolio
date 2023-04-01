import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import TechList from "@/components/techlist";
import Highlight from "@/components/highlight";
import Footer from "@/components/footer";

export default function Uses() {
  const techList = [
    "React.js",
    "Next.js",
    "Hygraph",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "AWS Amplify",
    "WebGL",
    "JavaScript ES6",
    "Java",
    "C",
    "C++",
    "Python",
    "PHP",
    "React Native",
    "TypeScript",
    "Kotlin",
    "PyQt5",
    "Unity 3D",
    "GraphQL",
  ];

  // sort the techList alphabetically
  techList.sort();

  return (
    <div className="min-h-screen bg-gray-800">
      <Navbar />

      <div className="relative">
        <Image
          className="w-full h-auto max-h-80 object-cover"
          src="/bg-uses.jpg"
          alt="background"
          width={2000}
          height={2000}
          position="fixed"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-white text-4xl font-normal px-4">
            A <Highlight>list of tech</Highlight> i have worked with
          </h1>
        </div>
      </div>
      <div className="container-md mx-auto max-w-2xl bg-dark-800 px-4  text-gray-300 font-light mt-4 ">
        <p className=" text-justify leading-7 ">
          As an <Highlight>Informatics Student</Highlight>, I have been spending
          hours at my desk every day, working with a variety of tools,
          platforms, and programming languages over the years. I have curated a
          list of the technology that I have experience using, ranging from
          popular programming languages like <Highlight>Java</Highlight> and{" "}
          <Highlight>Python</Highlight> to niche tools like{" "}
          <Highlight>Figma</Highlight>. If you a recruiter interested in my
          skills, I hope this list provides a useful glimpse into my technical
          background.
        </p>

        <div className="mt-4">
          <TechList techList={techList} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
