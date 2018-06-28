import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";
import React from "react";
import ReactDOM from "react-dom";

const Index = () => {
  return (
    <div>
      <p>Hello</p>
      <input type="button" className="btn btn-primary" value="Hello World" />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
