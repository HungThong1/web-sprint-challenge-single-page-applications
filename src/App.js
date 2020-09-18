import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Order from "./Order"
const App = () => {
  return (
    <div className = "App">
      <nav>
        <h1>Lambda Eats</h1>
          <Link to = "/"> <button>Home </button></Link>
          <Link to = "/pizza"> <button>Make a Pizza</button> </Link>
      </nav>
      <Route exact path="/"> 
      </Route> 
      <Route path="/pizza" component={Order}/>
    </div>
  );
};
export default App;