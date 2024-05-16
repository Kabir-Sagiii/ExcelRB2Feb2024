import List from "./List";
import Card from "./components/card/Card";
import "./App.css";

function App(myparameters) {
  // myparameters = {}
  return (
    <div className="App">
      <div className="cardContainer">
        <Card
          id={101}
          status={true}
          name={"Raj Sinha"}
          image="https://i.pinimg.com/originals/e3/7e/0e/e37e0e25686c2139b281a57a5b4906f2.jpg"
        />

        <Card
          id={102}
          status={false}
          name="Sneha Reddy"
          image="https://i.pinimg.com/originals/e6/78/4b/e6784b9cd722d02e014d7e60ebe25e39.jpg"
        />
        <Card
          id={103}
          status={true}
          name="Riya Sharma"
          image="https://th.bing.com/th/id/OIP.9oPtaexuvvh9wG20_htK5wAAAA?rs=1&pid=ImgDetMain"
        />
        <Card
          id={104}
          status={false}
          name="Rohan Verma"
          image="https://cdn9.dissolve.com/p/D430_49_193/D430_49_193_1200.jpg"
        />
      </div>
    </div>
  );
}

export default App;
