import React from "react";
import ReactDOM from "react-dom";

const urlImage = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <div>
      <img className="image" src={urlImage} alt="" />
      <img className="image" src={urlImage} alt="" />
      <img className="image" src={urlImage} alt="" />
    </div>
  </div>,
  document.getElementById("root")
);
