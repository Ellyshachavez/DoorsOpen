import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 225, clear: "both", paddingTop: 50, textAlign: "center", marginTop: "150px"}}
      className="jumbotron vertical-center"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
