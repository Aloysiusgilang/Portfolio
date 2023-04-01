import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import TechList from "@/components/techlist";
import Highlight from "@/components/highlight";
import { inter, openSans, playfairDisplay } from "@/components/fonts";
import Footer from "@/components/footer";
import FeaturedGrid from "@/components/freatured";
import ProjectGrid from "@/components/project";

export default function Works() {
  const projects = [
    {
      title: "Survee",
      techList: ["Next.js", "GraphQL", "Hygraph", "Vercel"],
      description:
        "A simple survey app that can be used to create a paid survey and share it with other people with matching categories. Award Winning Project in FIT Competition 2022. ",
      githubLink: "https://survee.vercel.app",
    },
    {
      title: "Akutenang.id",
      techList: ["React Native", "AWS Amplify", "Expo"],
      description:
        "Personalized mental health digital consultation platform (unfinished). Award Winning Project in Paragon Hackathon 2022 ",
      githubLink: "https://github.com/Aloysiusgilang/akutenang-amplify.git",
    },
    {
      title: "3D WebGL Hollow Object",
      techList: ["WebGL", "Javascript"],
      description:
        "A simple 3D hollow objects made with WebGL along with a simple UI to control the object and enable shading. ",
      githubLink: "https://github.com/haidarihza/IF3260_Tugas2_K03_G07.git",
    },
    {
      title: "Majika Menu App",
      techList: ["Kotlin", "Android Studio"],
      description:
        "A simple android app that can be used to order food and drinks in a restaurant and locate other branches. ",
      githubLink:
        "https://gitlab.informatika.org/febryola/if3210-2023-android-lyg.git",
    },
    {
      title: "Park.Co",
      techList: ["Python", "PyQt5", "MariaDB"],
      description:
        "A simple desktop-based parking app that can be used to manage parking and find parking spots in a certain area. ",
      githubLink: "#",
    },
    {
      title: "Extended Survival Shooter",
      techList: ["Unity 3d"],
      description:
        "A simple 3D game made with Unity 3D. The game is a simple survival shooter game with some additional features. ",
      githubLink:
        "https://gitlab.informatika.org/weslygio/if2250-2021-k02-13-park.co.git",
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

        <div className={playfairDisplay.className}>
          <div className=" px-4 mt-8  flex flex-col justify-center items-center text-justify">
            <p className="text-xl font-semibold text-cyan-200">
              {" "}
              Featured Projects
            </p>
          </div>
        </div>

        <div className="mt-8 px-4">
          <FeaturedGrid projects={featured} />
        </div>

        <div className=" px-4 mt-12 flex flex-col justify-center items-center text-justify">
          <div className={playfairDisplay.className}>
            <p className="text-xl font-semibold text-cyan-200">
              {" "}
              Other noteworthy projects
            </p>
          </div>
          <p className=" text-md font-normal mt-2">
            Here some variety of my projects, mostly as assignment as part of my
            college curriculum.
          </p>
        </div>

        <div className="mt-8 px-4">
          <ProjectGrid projects={projects} />
        </div>

        <div className="w-full flex items-center justify-center mt-6">
          <p className="text-sm text-cyan-200 hover:text-cyan-400 cursor-pointer">
            see more
          </p>
        </div>

        <Footer />
      </div>
    </div>
  );
}
