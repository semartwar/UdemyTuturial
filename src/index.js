import React from "react";
import ReactDOM from "react-dom";

const yourName = "Sam";
const CURRENTYEAR = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {yourName}</p>
    <p>Copyright {CURRENTYEAR}</p>
  </div>,
  document.getElementById("root")
);
