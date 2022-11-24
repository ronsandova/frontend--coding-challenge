import React from "react";
import ChangePassword from "./ChangePassword";

function App() {
  return (
    //  Container 
    <div className="container d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh"
      }}
    >
      <div className="w-100 d-flex align-items-center justify-content-center"
        style={{
          maxWidth: "500px"
        }}>
        <ChangePassword />
      </div></div>

  );
}

export default App;
