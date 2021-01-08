import React from "react";
import ReactDOM from "react-dom";

const name = "Sam";
const luckyNumber = 7;

ReactDOM.render(
  <div>
    <h1>Hello {name} !</h1>
    <p>Your lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);

//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
