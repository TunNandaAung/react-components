import React, { useState, useEffect } from 'react'

function Tabs(props) {
  const [tabs, setTabs] = useState([])
  const [activeTab, setActiveTab] = useState(null)

  useEffect(() => {
    let tabs = React.Children.toArray(props.children).filter(
      child => child.type.name === 'Tab',
    )
    setTabs(tabs)
    setActiveTab(tabs.find(tab => tab.props.isActive) || tabs[0])
  }, [props.children])

  // useEffect(() => {
  //   let newTabs = tabs.map((tab) => (tab.props.isActive = tab == activeTab));
  //   setTabs(newTabs);
  //   this.$emit("updated", this.activeTab.title.toLowerCase());
  //   props.updateTab(activeTab.title.toLowerCase());
  // }, [activeTab]);

  return (
    <div>
      <ul className="flex text-center" role="tablist">
        {tabs &&
          tabs.map((tab, index) => (
            <li
              className={
                'flex-1 cursor-pointer bg-transparent px-4 py-2 hover:bg-blue-200 ' +
                (tab === activeTab
                  ? 'rounded-none border-b-2 border-blue-400'
                  : 'rounded')
              }
              key={index}
              onClick={() => setActiveTab(tab)}
            >
              <span
                className={
                  'text-lg text-gray-700 focus:outline-none ' +
                  (tab === activeTab ? 'font-bold text-blue-400' : '')
                }
                role="tab"
                aria-selected={tab === activeTab}
              >
                {tab.props.title}
              </span>
            </li>
          ))}
      </ul>
      {/* {React.cloneElement(props.children, { isActive: tab == activeTab})} */}
      {React.Children.map(props.children, child =>
        React.cloneElement(child, {
          isActive: child.props.title === activeTab?.props.title,
        }),
      )}
    </div>
  )
}

export default Tabs
