import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/Shop/Shop.Component';
import Header from './Components/Header/Header.Component';


function App() {
  return (
    <div>
        <Header/>    
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/ShopPage" component={ShopPage} />
        </Switch>  
    </div>
  );
}

export default App;
