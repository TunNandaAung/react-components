import React, { useContext } from 'react'
import { AccordionItemContext } from './AccordionItem'

const AccordionHeader = props => {
  const { expanded, toggleExpansion } = useContext(AccordionItemContext)

  return (
    <div
      role="button"
      className="flex w-full items-center justify-between px-8 py-6 text-left focus:outline-none"
      onClick={toggleExpansion}
    >
      <h3 className="text-lg font-semibold leading-10 md:text-xl">
        {props.children}
      </h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={
          'h-8 w-8 flex-shrink-0 transition-transform duration-700 ' +
          (expanded ? 'rotate-180 transform' : '')
        }
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  )
}

export default AccordionHeader
