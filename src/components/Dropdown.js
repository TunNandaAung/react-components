import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const alignmentClass = {
    right: "right-0",
    left: "left-0",
    center: "transform right-1/2 translate-x-1/2 transition",
  };

  return (
    <div className="dropdown relative" align={props.align}>
      <div
        className="dropdown-toggle relative"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
      >
        {props.trigger}
      </div>
      <CSSTransition
        in={isOpen}
        classNames="pop-out"
        timeout={300}
        unmountOnExit
      >
        <ul
          className={
            "absolute mt-2 w-48 rounded-md bg-white shadow-lg z-50 " +
            alignmentClass[props.align]
          }
        >
          {props.body}
        </ul>
      </CSSTransition>
    </div>
  );
};

export default Dropdown;
