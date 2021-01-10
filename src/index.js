import React from "react";
import ReactDOM from "react-dom";

const urlImage = "https://picsum.photos/200";

const customStyle = {
  color: "green",
  fontSize: "20px",
  border: "1px solid black"
};

const date = new Date(2013, 2, 1, 1, 13);
const time = date.getHours();
let heading = "Good Morning";

if (time >= 12 && time <= 18) {
  heading = "Good Afternoon";
  customStyle.color = "green";
} else if (time >= 18 && time <= 24) {
  heading = "Good Evening";
  customStyle.color = "blue";
} else {
  heading = "Good Morning";
  customStyle.color = "red";
}

// customStyle.color = "purple";

ReactDOM.render(
  <div>
    <h1 style={customStyle}>{heading}</h1>
    <p>bla bla</p>
    <div>
      <img className="image" src={urlImage} alt="" />
      <img className="image" src={urlImage} alt="" />
      <img className="image" src={urlImage} alt="" />
    </div>
  </div>,
  document.getElementById("root")
);
