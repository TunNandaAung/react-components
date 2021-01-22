import React, { useEffect, useState } from "react";

function Tab({ children, isActive = false }) {
  const [active, setActive] = useState(null);

  useEffect(() => setActive(isActive), [isActive]);

  return (
    <div role="tabpanel" className={active ? "block" : "hidden"}>
      {children}
    </div>
  );
}

export default Tab;
