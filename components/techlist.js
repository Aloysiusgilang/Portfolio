import React from "react";
import cn from "classnames";

const TechList = ({ techList }) => {
  return (
    <ul className="grid grid-cols-2 text-sm ">
      {techList.map((tech) => (
        <li key={tech} className="py-1 flex items-center">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400 mr-3 mt-1 list-disc"></span>
          <a href="#" className=" text-gray-300 hover:text-gray-900">
            {tech}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default TechList;
