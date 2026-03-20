import React from "react";
import Cube from './components/Cube';  

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        background: "#63b8c4", // navy blue
        margin: 0,
        padding: 0,
        overflow: "hidden"
      }}
    >
      <Cube />
    </div>
  );
}

export default App;