import React, { useContext, useEffect, useRef } from "react";
import { AccordionItemContext } from "./AccordionItem";

const AccordionContent = (props) => {
  const { expanded } = useContext(AccordionItemContext);
  const itemRef = useRef();

  return (
    <div
      className="relative overflow-hidden transition-all max-h-0 duration-500 text-gray-700 mb-4"
      ref={itemRef}
      style={
        expanded
          ? { maxHeight: `${itemRef.current.scrollHeight}px` }
          : { maxHeight: "0px" }
      }
    >
      <div className="py-1 px-8 leading-8">{props.children}</div>
    </div>
  );
};

export default AccordionContent;
