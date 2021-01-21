import Dropdown from "./components/Dropdown";
import React, { useState } from "react";
import ConfirmModal from "./components/ConfirmModal";

function App() {
  const [show, setShow] = useState(false);

  const dismiss = () => {
    setShow(false);
  };
  return (
    <div className="bg-pink-100">
      {/* <Tabs class="mb-4">
        <Tab title={"Overview"}>Overview</Tab>
        <Tab title={"About"}>About</Tab>
      </Tabs> */}
      <div className="m-16">
        <Dropdown trigger={<Trigger />} body={<Body />}></Dropdown>
      </div>
      <div className="flex items-center justify-center mt-16">
        <button
          className="w-24 bg-white shadow-xl rounded text-lg font-bold p-2 text-center cursor-pointer"
          onClick={() => setShow(true)}
        >
          Trigger
        </button>
      </div>
      <ConfirmModal show={show} dismiss={dismiss}></ConfirmModal>
    </div>
  );
}

const Trigger = () => (
  <div className="w-24 bg-white shadow-xl rounded text-lg font-bold p-2 text-center cursor-pointer">
    Trigger
  </div>
);

const Body = () => <div className="text-center p-2">Body</div>;

export default App;
