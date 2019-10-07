import React from 'react';
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../Cart_Icon/Cart_Icon.component';
import CartDropdown from '../cart_dropdown/cart_dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import selectCurrentUser from '../../redux/user/user.selector';
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
                <div className="option green-signOut" onClick = {() => auth.signOut()}>
                    SIGN OUT
                </div>
                ) : (
                <Link className="option red-signin" to="/signin">SIGN IN</Link>
                
                )}
            <CartIcon />
        </div>
        {
            hidden ? null:
            <CartDropdown/>            
        }
        
    </div>
)

const mapSateToProps = createStructuredSelector ({
    currentUser:selectCurrentUser,
    hidden : selectCartHidden
});

export default connect(mapSateToProps)(Header);