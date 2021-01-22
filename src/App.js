import Dropdown from "./components/Dropdown";
import React, { useState } from "react";
import ConfirmModal from "./components/ConfirmModal";
import Tabs from "./components/Tabs";
import Tab from "./components/Tab";

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
          className="w-48 bg-white shadow-xl rounded text-lg font-bold p-2 text-center cursor-pointer"
          onClick={() => setShow(true)}
        >
          Show Modal
        </button>
      </div>
      <div className="mt-16 max-w-xl w-full mx-auto">
        <div className="bg-white rounded-lg">
          <Tabs>
            <Tab title="Test" isActive={true}>
              This is test
            </Tab>
            <Tab title="Test Again">Yet another test</Tab>
          </Tabs>
        </div>
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
