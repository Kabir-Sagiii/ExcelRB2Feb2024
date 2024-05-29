import Nav from "./components/nav/Nav";
import Users from "./components/Users/Users";
import Header from "./components/Header/Header";
import Name from "./components/ReduxConcept/Name";
import Details from "./components/ReduxConcept/Details";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Name />
      <Details />
    </div>
  );
}

export default App;
