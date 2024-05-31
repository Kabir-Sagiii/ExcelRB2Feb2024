const myReducer = (state = { name: "" }, action) => {
  //action = {type:"Name",userName:"----"}

  if (action.type === "NAME") {
    state = {
      name: action.userName,
    };
  }

  return state;
};

export default myReducer;

//Reducer is  a simple JS function which takes two parameters and it return state

// Register Reducer with Redux Store
