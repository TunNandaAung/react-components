import React, { useState } from 'react'

export const AccordionItemContext = React.createContext({
  expanded: false,
  toggleExpansion: () => {},
})

const AccordionItem = props => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpansion = () => setExpanded(!expanded)

  return (
    <AccordionItemContext.Provider value={{ expanded, toggleExpansion }}>
      <div className="border-gray-30 relative border-b">{props.children}</div>
    </AccordionItemContext.Provider>
  )
}

export default AccordionItem
