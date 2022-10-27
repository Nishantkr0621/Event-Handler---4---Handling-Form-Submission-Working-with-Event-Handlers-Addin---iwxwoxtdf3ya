import React from "react";
import "../styles/App.css";
const App = () => {
  let count = 0;
  const handleDoubleClick = (event) => {
    ++count;
    let singleClickTimer;
    if (count === 1) {
      singleClickTimer = setTimeout(() => {
        count = 0;
        console.log("I was not double clicked");
      }, 400);

      // console.log("I was not double clicked");
    } else if (count === 2) {
      clearTimeout(singleClickTimer);
      count = 0;
      console.log("I was double clicked");
    }
  };
  return (
    <div id="main">
      <button
        id="dblclick-btn"
        onDoubleClick={(event) => handleDoubleClick(event)}
      >
        Double click me
      </button>
    </div>
  );
};

export default App;
