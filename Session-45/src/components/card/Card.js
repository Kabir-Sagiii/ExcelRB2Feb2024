import "./Card.css"; //Linking CSS file with JS file

function Card(props) {
  // x = {name:"Raj Sinha",image:"" } React will store the object in the parameter
  return (
    <div id="usercard">
      <img src={props.image} width="100%" height="200" />
      <h4>101</h4>
      <h3>{props.name}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam labore
        porro sed.
      </p>
      <h4>{props.status ? "Active" : "Inactive "}</h4>
      <button>Profile</button>
    </div>
  );
}

export default Card;
