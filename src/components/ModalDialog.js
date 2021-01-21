import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

const ModalDialog = (props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  useEffect(() => {
    show
      ? document.body.style.setProperty("overflow", "hidden")
      : document.body.style.removeProperty("overflow");
  }, [show]);

  useEffect(() => {
    const escapeHandler = (e) => {
      if (e.key === "Escape" && show) {
        dismiss();
      }
    };
    document.addEventListener("keydown", escapeHandler);

    return function cleanup() {
      document.removeEventListener("keydown", escapeHandler);
    };
  });

  const dismiss = () => {
    props.dismiss();
  };

  return (
    <Transition show={show}>
      <div className="fixed bottom-0 inset-0 px-4 pb-4 flex flex-col items-center justify-center sm:inset-0 sm:flex sm:items-center sm:justify-center">
        <Transition.Child
          enterFrom="opacity-0"
          enter="transition-opacity ease-out duration-300"
          enterTo="opacity-100"
          leaveFrom="opacity-100"
          leave="transition-opacity ease-in duration-300"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
        </Transition.Child>

        <Transition.Child
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter="transition-all transform ease-out duration-300"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leave="transition-all transform ease-in duration-300"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            className="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transition-all transform sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            {props.children}
          </div>
        </Transition.Child>
      </div>
    </Transition>
  );
};

export default ModalDialog;
