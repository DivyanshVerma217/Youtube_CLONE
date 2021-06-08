import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar.js";
import Recommended from "./Recommended.js";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_page">
        <Sidebar />
        <Recommended />
      </div>
    </div>
  );
}

export default App;
