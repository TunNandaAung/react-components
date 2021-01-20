import React, { useEffect, useState } from "react";

function Tab(props) {
  const [isActive, setIsActive] = useState(null);

  useEffect(() => setIsActive(props.isActive));

  return (
    <div role="tabpanel" className={isActive ? "block" : "hidden"}>
      {props.children}
    </div>
  );
}

export default Tab;
