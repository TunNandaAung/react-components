import React, { useContext, useRef } from 'react'
import { AccordionItemContext } from './AccordionItem'

const AccordionContent = props => {
  const { expanded } = useContext(AccordionItemContext)
  const itemRef = useRef()

  return (
    <div
      className="relative mb-4 max-h-0 overflow-hidden text-gray-700 transition-all duration-500"
      ref={itemRef}
      style={
        expanded
          ? { maxHeight: `${itemRef.current.scrollHeight}px` }
          : { maxHeight: '0px' }
      }
    >
      <div className="px-8 py-1 leading-8">{props.children}</div>
    </div>
  )
}

export default AccordionContent
