import React from "react";
import Dashboard from "./Components/Dashboard";
import Store from "./Components/Store";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Store>
        <Dashboard />
      </Store>
    </div>
  );
}

export default App;
