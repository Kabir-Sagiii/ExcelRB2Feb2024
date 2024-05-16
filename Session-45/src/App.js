import Nav from "./components/nav/Nav";
import StateComp from "./components/state/StateComp";
import PracState from "./components/state/PracState";
import Image from "./components/State-Task/Image";
import ShowHidePassword from "./components/State-Task/ShowHidePassword";
import "./App.css";
import Profile from "./components/Profile/Profile";

function App(myparameters) {
  // myparameters = {}
  return (
    <div className="App">
      <Nav />
      <Profile />
      {/* <StateComp /> */}
      <Image />
      <ShowHidePassword />
      <PracState />
    </div>
  );
}

export default App;
