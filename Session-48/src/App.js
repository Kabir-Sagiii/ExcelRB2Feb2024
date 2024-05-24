import Nav from "./components/nav/Nav";
import Profile from "./components/Profile/Profile";
import StateComp from "./components/state/StateComp";
import ClassComp from "./components/classcomp/ClassComp";
import Home from "./components/home/Home";
import UseRefComp from "./components/useref/UseRefComp";
import { Route, Routes } from "react-router-dom";
import A from "./components/use-context/A";

function App() {
  return (
    <div className="App">
      <Nav />
      <A />

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/classcomp" element={<ClassComp />} />
        <Route path="/statecomp" element={<StateComp />} />
        <Route path="/useref" element={<UseRefComp />} />
      </Routes> */}
    </div>
  );
}

export default App;
