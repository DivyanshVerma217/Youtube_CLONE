import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar.js";
import Recommended from "./Recommended.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app_page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app_page">
              <Sidebar />
              <Recommended />
            </div>
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
