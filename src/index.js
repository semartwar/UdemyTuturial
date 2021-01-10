import React from "react";
import ReactDOM from "react-dom";

function Heading() {
  return <h1> My favorite Foods </h1>;
}

ReactDOM.render(
  <div>
    <Heading></Heading>
    <ul>
      <li>Becon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </div>,
  document.getElementById("root")
);
