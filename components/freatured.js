import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFile, FaGithub } from "react-icons/fa";

const Featured = ({ title, techList, description, githubLink, img }) => {
  return (
    <div className="max-w-2xl mx-auto w-full mb-12 bg-gray-700 rounded shadow-md overflow-hidden">
      <div className="flex-col">
        <div className="flex-shrink-0">
          <Image
            className="h-72 w-full object-cover"
            width={500}
            height={500}
            src={img}
            alt="Image description"
          />
        </div>
        <div className="p-4">
          <div className="uppercase tracking-wide text-sm text-cyan-300 font-semibold hover:underline">
            <a href={githubLink}> {title}</a>
          </div>

          <p className="mt-2 text-sm text-gray-300">{description}</p>

          <ul className="mt-4 flex gap-2 text-xs text-cyan-300">
            {techList.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const FeaturedGrid = ({ projects }) => {
  return (
    <div className="">
      {projects.map((project, index) => (
        <Featured
          key={index}
          title={project.title}
          techList={project.techList}
          description={project.description}
          githubLink={project.githubLink}
          img={project.img}
        />
      ))}
    </div>
  );
};

export default FeaturedGrid;
