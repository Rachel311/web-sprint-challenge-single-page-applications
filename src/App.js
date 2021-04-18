import './App.css';
import React from 'react';
import Form from './Components/Form';
import { Route } from 'react-router-dom';
import Pizza from './Components/Pizza';


function App() {
 
  return (
    <div className="App">
      <h1>Lambda Eats!</h1>
      <Route exact path="/" component={Form}/>
      <Route path="/pizza" component={() => <Pizza/>}/>
    </div>

  );
}

export default App;

