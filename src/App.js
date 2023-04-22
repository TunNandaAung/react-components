import Dropdown from './components/Dropdown'
import React, { useState } from 'react'
import ConfirmModal from './components/ConfirmModal'
import Tabs from './components/Tabs'
import Tab from './components/Tab'
import AccordionList from './components/accordion/AccordionList'
import AccordionItem from './components/accordion/AccordionItem'
import AccordionContent from './components/accordion/AccordionContent'
import AccordionHeader from './components/accordion/AccordionHeader'
import ImagePicker from './components/ImagePicker'

function App() {
  const [show, setShow] = useState(false)

  const dismiss = () => {
    setShow(false)
  }
  return (
    <div className="bg-pink-100">
      {/* <Tabs class="mb-4">
        <Tab title={"Overview"}>Overview</Tab>
        <Tab title={"About"}>About</Tab>
      </Tabs> */}
      <div className="m-16 mx-auto w-full max-w-xl">
        <Dropdown
          trigger={<Trigger />}
          body={<Body />}
          align={'center'}
        ></Dropdown>
      </div>
      <div className="mt-16 flex items-center justify-center">
        <button
          className="w-48 cursor-pointer rounded bg-white p-2 text-center text-lg font-bold shadow-xl"
          onClick={() => setShow(true)}
        >
          Show Modal
        </button>
      </div>
      <div className="mx-auto mt-16 w-full max-w-xl">
        <div className="rounded-lg bg-white">
          <Tabs>
            <Tab title="Test" isActive={true}>
              This is test
            </Tab>
            <Tab title="Test Again">Yet another test</Tab>
          </Tabs>
        </div>
      </div>
      <div className="mx-auto mt-16 w-full max-w-xl">
        <AccordionList>
          <AccordionItem>
            <AccordionHeader>Section 1</AccordionHeader>
            <AccordionContent>
              Mauris mauris ante, blandit et, ultrices a.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader>Section 2</AccordionHeader>
            <AccordionContent>
              Sed non urna. Donec et ante. Phasellus eu ligula.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader>Section 3</AccordionHeader>
            <AccordionContent>
              Nam enim risus, molestie et, porta ac, aliquam ac.
            </AccordionContent>
          </AccordionItem>
        </AccordionList>
      </div>

      <div className="mx-auto my-16 w-full max-w-xl">
        <ImagePicker name={'photo'}></ImagePicker>
      </div>
      <ConfirmModal show={show} dismiss={dismiss}></ConfirmModal>
    </div>
  )
}

const Trigger = () => (
  <div className="relative w-24 cursor-pointer rounded bg-white p-2 text-center text-lg font-bold shadow-xl">
    Trigger
  </div>
)

const Body = () => <div className="p-2 text-center">Body</div>

export default App
