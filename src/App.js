import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Order from "./Order"
const App = () => {
  return (
    <div className = "App">
      <h1>Lambda Eats</h1>
      <nav>
          <Link to = "/"> Home </Link>
          <Link to = "/pizza"> Make a Pizza </Link>
      </nav>
      <Route exact path="/"> 
      </Route> 
      <Route path="/pizza" component={Order}/>
    </div>
  );
};
export default App;