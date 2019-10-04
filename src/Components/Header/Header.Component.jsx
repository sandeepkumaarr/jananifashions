import React from 'react';
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../Cart_Icon/Cart_Icon.component';
import CartDropdown from '../cart_dropdown/cart_dropdown.component';
import { ReactComponent as Logo} from '../../Assets/logo.svg';
import './Header.style.scss';

const Header = ({currentUser,hidden}) => (

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
            {currentUser ?  (
                <div className="option" onClick = {() => auth.signOut()}>
                    SIGN OUT
                </div>
                ) : (
                <Link className="option" to="/signin">SIGN IN</Link>
                
                )}
            <CartIcon />
        </div>
        {
            hidden ? null:
            <CartDropdown/>            
        }
        
    </div>
)

const mapSateToProps = ({user:{currentUser},cart:{hidden}}) => ({
    currentUser,
    hidden
});

export default connect(mapSateToProps)(Header);