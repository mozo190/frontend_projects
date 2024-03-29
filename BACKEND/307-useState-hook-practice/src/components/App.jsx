import React from "react";

function App() {

  //1. Given that you can get the current time using:
let time = new Date().toLocaleTimeString();
console.log(time);

const getTime = () => {
  time = new Date().toLocaleTimeString();
  console.log(time);
}

setInterval(getTime, 1000);

//Show the latest time in the <h1> when the Get Time button
//is pressed.


  return (
    <div className="container">
      <h1>{getTime}</h1>
      <button onClick={}>Get Time</button>
    </div>
  );
}

export default App;
