/** @format */
import NavBar from "./components/NavBar";
import { getLocationByInput, getWhetherData } from "./services/WheatherApi";
import "./index.css";
function App() {
  let location = getLocationByInput();
  let whetherData = getWhetherData();
  console.log(location);
  console.log(whetherData);
  return (
    <>
      <NavBar />
    </>
  );
}

export default App;
