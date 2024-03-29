import React, { useState} from "react";

function App() {

  const [time, setTime] = React.useState(new Date().toLocaleTimeString());


  function getTime() {
    setTime(new Date().toLocaleTimeString());
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={ getTime }>Get Time</button>
    </div>
  );
}

export default App;
