import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/Shop/Shop.Component';
import Header from './Components/Header/Header.Component';
import SignInAndSignOutPage from './pages/Sign-in-and-sign-out/Sign-in-and-sign-out.component';
import Footer from './Components/Footer/Footer.Component.jsx';
import {auth} from './firebase/firebase.utils';



class App extends  React.Component {
  constructor(){
    super();

          this.state = {
          currentUser:  null
        };
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({currentUser:  user});
      console.log(user);
    });
  }
  
render(){

    return (
      <div>
          <Header currentUser = {this.state.currentUser}/>    
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/ShopPage" component={ShopPage} />
            <Route exact path="/signin" component={SignInAndSignOutPage} />
          </Switch>  
          <Footer/>
      </div>
    );
  }
}

export default App;
