import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

const Dropdown = props => {
  const [isOpen, setIsOpen] = useState(false)

  const alignmentClass = {
    right: 'right-0',
    left: 'left-0',
    center: 'left-1/2 -translate-x-1/2',
  }

  return (
    <div className="dropdown relative" align={props.align}>
      <div
        className="dropdown-toggle relative"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
      >
        {props.trigger}
        <CSSTransition
          in={isOpen}
          classNames="slide-down"
          timeout={300}
          unmountOnExit
        >
          <ul
            className={
              'absolute z-50 mt-2 w-48 rounded-md bg-white shadow-lg ' +
              alignmentClass[props.align]
            }
          >
            {props.body}
          </ul>
        </CSSTransition>
      </div>
    </div>
  )
}

export default Dropdown
