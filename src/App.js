import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Productos from './components/CarruselBox'
import HomeProductos from './components/HomeProductos'
function App() {
  return (
  
      <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Menu}/>
          <Route exact path="/productos" component={Productos}/>
          <Route exact path="/confirmarCompra" component={HomeProductos}/>
          </Switch>
      </div>
      </Router>
       );
      }
      
      export default App;
      
