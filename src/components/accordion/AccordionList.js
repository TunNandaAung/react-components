import React from "react";

const AccordionList = (props) => {
  return (
    <div className="shadow-box border-t boder-gray-400">{props.children}</div>
  );
};

export default AccordionList;
