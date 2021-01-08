import React from "react";
import ReactDOM from "react-dom";

const yourName = "Sam";
const currentYear = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {yourName}</p>
    <p>Copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);
