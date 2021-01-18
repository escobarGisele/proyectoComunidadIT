import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {AuthProvider} from './components/Auth';
//import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Productos from './components/CarruselBox'
function App() {
  return (
  
      <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Menu}/>
          <Route exact path="/confirmarCompra" component={Productos}/>
          </Switch>
      </div>
      </Router>
       );
      }
      
      export default App;
      
