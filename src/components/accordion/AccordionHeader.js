import React, { useContext } from "react";
import { AccordionItemContext } from "./AccordionItem";

const AccordionHeader = (props) => {
  const { expanded, toggleExpansion } = useContext(AccordionItemContext);

  return (
    <div
      role="button"
      className="w-full px-8 py-6 text-left focus:outline-none flex items-center justify-between"
      onClick={toggleExpansion}
    >
      <h3 className="text-lg md:text-xl font-semibold leading-10">
        {props.children}
      </h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={
          "flex-shrink-0 transition-transform duration-700 h-8 w-8 " +
          (expanded ? "rotate-180 transform" : "")
        }
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );
};

export default AccordionHeader;
