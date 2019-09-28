import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const NewArrivals = () => (
  <div>
    <h1>New Arrivals</h1>
  </div>
);

function App() {
  return (
    <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/newarrivals" component={NewArrivals} />
    </Switch>  
    </div>
  );
}

export default App;
