import Tabs from "./components/Tabs";
import Tab from "./components/Tab";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div className="bg-pink-100">
      {/* <Tabs class="mb-4">
        <Tab title={"Overview"}>Overview</Tab>
        <Tab title={"About"}>About</Tab>
      </Tabs> */}
      <div className="m-16">
        <Dropdown trigger={<Trigger />} body={<Body />}></Dropdown>
      </div>
    </div>
  );
}

const Trigger = () => (
  <div className="w-24 bg-white shadow-xl rounded text-lg font-bold p-2 text-center cursor-pointer">
    Trigger
  </div>
);

const Body = () => "Body";

export default App;
