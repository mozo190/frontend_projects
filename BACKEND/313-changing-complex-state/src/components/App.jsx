import React, {useState} from "react";

function App() {

const [fullName, setFullName] = useState({
  fName: "",
  lName: ""
});

function handleChange(event) {
  const {name, value} = event.target;

  if (name === "fName") {
    setFName(value);
  }
  else if (name === "lName") {
    setLName(value);
  } 
}

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input name="fName" onChange={handleChange} placeholder="First Name" />
        <input name="lName" onChange={handleChange} placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
