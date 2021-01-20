import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown relative" align="right" width="400px">
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
            "origin-top-right absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg z-50"
          }
        >
          {props.body}
        </ul>
      </CSSTransition>
    </div>
  );
};

export default Dropdown;
