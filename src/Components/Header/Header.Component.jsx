import React from 'react';
import {Link} from 'react-router-dom'; 
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils'
import { ReactComponent as Logo} from '../../Assets/logo.svg';
import './Header.style.scss';

const Header = ({currentUser}) => (

    <div className="header">
        <div>        
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <span className ="logoname" style={{fontSize: "30px", fontWeight:"900"}}>Janani Fashions</span>
        </div>


        <div className="options">
            <Link className="option" to="/ShopPage">
                SHOP
            </Link>
            <Link className="option" to="/ShopPage">
                CONTACT
            </Link>
            {currentUser ?
                <div className="option" onClick = {() => auth.signOut()}>
                    SIGN OUT
                </div>
                :
                <Link className="option" to="/signin">SIGN IN</Link>
            }
        </div>
    </div>
)

const mapSateToProps = state => ({
    currentUser : state.user.currentUser
});

export default connect(mapSateToProps)(Header);