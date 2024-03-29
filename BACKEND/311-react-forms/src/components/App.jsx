import React, { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");

  function clicked(event) {
    setHeadingText(name);

    event.preventDefault();
  }

  function handleChange(event) {
    console.log("Button clicked");
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      <form onClick={clicked}>
        <input onChange={handleChange} type="text" placeholder="What's your name?" />
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
}

export default App;
