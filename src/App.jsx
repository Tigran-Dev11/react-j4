import React from "react";
import data from "./components/back/Data/Data";
import Header from "./components/front/header/header";
import Routes from "./components/front/routes/routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  
  const {productItems} = data;
  
  return (
    <div>
          <Router>
         <Header />
         <Routes />
          </Router>
    </div>
  );
}

export default App;
