import React from "react";
import blogData from "../data/blog";
import App from "../components/App";
console.log(blogData);

function DemoApp() {
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <blogData/>
    </div>
  );
}

export default DemoApp;
