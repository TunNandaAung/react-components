import React, { useState, useEffect } from "react";

function Tabs(props) {
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    setTabs(props.children);
    setInitialActiveTab();
  });

  //   useEffect(() => {
  //     let newTabs = tabs.map((tab) => (tab.isActive = tab == activeTab));
  //     setTabs(newTabs);
  //     // this.$emit("updated", this.activeTab.title.toLowerCase());
  //     // props.updateTab(activeTab.title.toLowerCase());
  //   }, [activeTab]);

  const setInitialActiveTab = () => {
    setActiveTab(tabs.find((tab) => tab.active) || tabs[0]);
  };

  return (
    <div>
      <ul className="flex text-center" role="tablist">
        {tabs &&
          tabs.map((tab, index) => (
            <li
              className={
                "px-4 py-2 bg-transparent flex-1 cursor-pointer hover:bg-gray-200" +
                (tab.isActive
                  ? "border-b-2 border-blue-600 rounded-none"
                  : "rounded")
              }
              key={index}
              onClick={() => setActiveTab(tab)}
            >
              <span
                className={
                  "focus:outline-none text-lg text-gray-700" +
                  (tab.isActive ? "font-bold-text-blue-600" : "")
                }
                role="tab"
                aria-selected={tab.isActive}
              >
                {tab.title}
              </span>
            </li>
          ))}
      </ul>

      {props.children}
    </div>
  );
}

export default Tabs;
