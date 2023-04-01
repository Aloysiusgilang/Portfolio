import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import TechList from "@/components/techlist";
import Highlight from "@/components/highlight";
import Footer from "@/components/footer";
import ProjectGrid from "@/components/project";

export default function Works() {
  const projects = [
    {
      title: "Project 1",
      techList: ["React", "Node.js", "MongoDB"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod bibendum dolor eget pulvinar.",
      githubLink: "https://github.com/example/project1",
    },
    {
      title: "Project 2",
      techList: ["Angular", "Express", "MySQL"],
      description:
        "Suspendisse potenti. Fusce consectetur felis ac malesuada accumsan.",
      githubLink: "https://github.com/example/project2",
    },
    {
      title: "Project 3",
      techList: ["Vue.js", "Laravel", "PostgreSQL"],
      description:
        "Nulla facilisi. Integer tincidunt nisi eget leo semper auctor.",
      githubLink: "https://github.com/example/project3",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-800">
      <div className="container-md mx-auto max-w-2xl bg-dark-800  text-gray-300 font-light ">
        <Navbar />

        <div className=" px-4 mt-8 flex flex-col justify-center items-center text-justify">
          <p className="text-white text-2xl font-semibold">
            {" "}
            Some things i've built
          </p>
          <p className=" text-md font-normal mt-2">
            Here some variety of my projects, mostly as assignment as part of my
            college curriculum.
          </p>
        </div>

        <div className="mt-8">
          <ProjectGrid projects={projects} />
        </div>

        <Footer />
      </div>
    </div>
  );
}
