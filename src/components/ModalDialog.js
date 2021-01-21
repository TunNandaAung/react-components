import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

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
      if (e.key === "Escape" && this.show) {
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
    <div>
      <CSSTransition
        in={show}
        timeout={300}
        classNames={{
          enter: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
          enterActive: "transition-all ease-out duration-300",
          enterDone: "opacity-100 translate-y-0 sm:scale-100",
          exit: "opacity-100 translate-y-0 sm:scale-100",
          exitActive: "transition-all ease-in duration-300",
          exitDone: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
        }}
        unmountOnExit
      >
        <div className="fixed bottom-0 inset-0 px-4 pb-4 flex flex-col items-center justify-center sm:inset-0 sm:flex sm:items-center sm:justify-center z-20">
          <CSSTransition
            in={show}
            timeout={300}
            classNames={{
              enter: "opacity-0",
              enterActive: "transition-opacity ease-out duration-300",
              enterDone: "opacity-100",
              exit: "opacity-100",
              exitActive: "transition-opacity ease-in duration-200",
              exitDone: "opacity-0",
            }}
            unmountOnExit
          >
            <div className="fixed inset-0">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
          </CSSTransition>

          <CSSTransition
            in={show}
            timeout={300}
            classNames={{
              enterActive: "transition-all ease-out duration-300",
              enter: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
              enterDone: "opacity-100 translate-y-0 sm:scale-100",
              exitActive: "transition-all ease-in duration-300",
              exit: "opacity-100 translate-y-0 sm:scale-100",
              exitDone: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            }}
            unmountOnExit
          >
            <div
              className="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 align-middle w-4/5 sm:w-2/3 md:max-w-xl md:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              {props.children}
            </div>
          </CSSTransition>
        </div>
      </CSSTransition>
    </div>
  );
};

export default ModalDialog;
