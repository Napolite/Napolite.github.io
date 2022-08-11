import React, { useState, useEffect } from "react";
import Home from "./components/home";
import "./App.css";
import Landing from "./components/landing/landing";

const App = () => {
  const [dispHome, setDispHome] = useState(false);

  useEffect(() => {
    setTimeout(() => setDispHome(true), 3000);
  });
  return (
    <div>
      {!dispHome ? (
        <Landing />
      ) : (
        <div className="home">
          <Home />
        </div>
      )}
    </div>
  );
};

export default App;
