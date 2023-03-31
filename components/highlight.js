import React from "react";
import cn from "classnames";

const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        "bg-cyan-400/20",
        "text-gray-100",
        "py-0.1 px-1.5 rounded-md",
        "inline-block",
        "font-normal",
        className
      )}
    >
      {children}
    </span>
  );
};

export default Highlight;
