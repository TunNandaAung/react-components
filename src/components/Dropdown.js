import React, { useState } from "react";

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  const { children } = props;

  return (
    <div className="dropdown relative" align="right" width="400px">
      <div
        className="dropdown-toggle relative"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
      >
        {props.trigger}
      </div>
      {isOpen ? (
        <ul className="origin-top-right absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg z-50">
          {props.body}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Dropdown;
