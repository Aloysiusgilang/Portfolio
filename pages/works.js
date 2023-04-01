import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import TechList from "@/components/techlist";
import Highlight from "@/components/highlight";
import Footer from "@/components/footer";
import FeaturedGrid from "@/components/freatured";
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

  const featured = [
    {
      title: "KOL Management Database by DigiWonder",
      techList: ["Next.js", "Tailwind", "Planetscale", "Express"],
      description:
        "Digiwonder is Digital Marketing Agency based in Bandung. We helped them to build a database management system for their influencer marketing clients.",
      githubLink: "https://kol-dm-fe.vercel.app",
      img: "/featured/digiwonder.png",
    },
    {
      title: "Spotify Clone",
      techList: ["PHP", "MySQL", "Javascript", "Java", "REST", "SOAP"],
      description:
        "This web-based music application offers similar functionality and UI to Spotify and was built using both REST and SOAP protocols.",
      githubLink:
        "https://gitlab.informatika.org/if3110-2022-k02-02-24/binotify-app.git",
      img: "/featured/spotipi.jpg",
    },
    {
      title: "KAMIKU Blog",
      techList: ["GraphQL", "Hygraph", "Next.js", "Sass", "Vercel"],
      description:
        "This is a blog for Kamiku, a community of ITB students from Kuningan, Jawa Barat. ",
      githubLink: "https://kamiku.vercel.app/",
      img: "/featured/kamiku.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-800">
      <div className="container-md mx-auto max-w-2xl bg-dark-800  text-gray-300 font-light ">
        <Navbar />

        <div className=" px-4 mt-8  flex flex-col justify-center items-center text-justify">
          <p className="text-xl font-semibold text-cyan-300">
            {" "}
            Featured Projects
          </p>
        </div>

        <div className="mt-8 px-4">
          <FeaturedGrid projects={featured} />
        </div>

        <div className=" px-4 mt-12 flex flex-col justify-center items-center text-justify">
          <p className="text-xl font-semibold text-cyan-300">
            {" "}
            Other noteworthy projects
          </p>
          <p className=" text-md font-normal mt-2">
            Here some variety of my projects, mostly as assignment as part of my
            college curriculum.
          </p>
        </div>

        <div className="mt-8 px-4">
          <ProjectGrid projects={projects} />
        </div>

        <Footer />
      </div>
    </div>
  );
}
