import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

function Tab({ children, isActive = false }) {
  const [active, setActive] = useState(false);

  useEffect(() => setActive(isActive), [isActive]);

  return (
    <Transition
      show={active}
      enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      enter="transition-all transform ease-out duration-300"
      enterTo="opacity-100 translate-y-0 sm:scale-100"
      leaveFrom="opacity-100 translate-y-0 sm:scale-100"
      leave="transition-all transform ease-in duration-300"
      leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    >
      <div role="tabpanel" className={active ? "block p-8" : "hidden"}>
        {children}
      </div>
    </Transition>
  );
}

export default Tab;
