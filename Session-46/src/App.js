import Nav from "./components/nav/Nav";
import Profile from "./components/Profile/Profile";
import StateComp from "./components/state/StateComp";
import ClassComp from "./components/classcomp/ClassComp";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/classcomp" element={<ClassComp />} />
        <Route path="/statecomp" element={<StateComp />} />
      </Routes>
    </div>
  );
}

export default App;
