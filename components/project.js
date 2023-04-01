import React from "react";
import cn from "classnames";
import Link from "next/link";
import { FaFile, FaGithub } from "react-icons/fa";

const Project = ({ title, techList, description, githubLink }) => {
  return (
    <div className=" shadow-md bg-gray-700 w-80 h-44 p-4 flex flex-col justify-between">
      <div>
        <div className="flex  items-center justify-between">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              viewBox="0 0 384 512"
            >
              <path
                d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z"
                fill="cyan"
              />
            </svg>
            <h2 className="text-cyan-300 mx-3 font-normal">{title}</h2>
          </div>

          <Link className="" href={githubLink}>
            <FaGithub size={24} />
          </Link>
        </div>

        <p className="font-light text-justify mt-4 text-xs">{description}</p>
      </div>
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
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
