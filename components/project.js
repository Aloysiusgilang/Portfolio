import React from "react";
import cn from "classnames";
import Link from "next/link";
import { FaFile, FaGithub } from "react-icons/fa";

const Project = ({ title, techList, description, githubLink }) => {
  return (
    <div className="bg-gray-700 w-80 min-h-72 p-4 ">
      <div className="flex  items-center justify-between">
        <div className="flex items-center">
          {" "}
          <FaFile />
          <h2 className="text-cyan-300 mx-2 font-normal">{title}</h2>
        </div>

        <Link className="" href={githubLink}>
          <FaGithub size={24} />
        </Link>
      </div>

      <p className="font-light text-justify mt-4 text-xs">{description}</p>

      <ul className="mt-4 flex gap-2 text-xs text-cyan-300">
        {techList.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

const ProjectGrid = ({ projects }) => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          techList={project.techList}
          description={project.description}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
