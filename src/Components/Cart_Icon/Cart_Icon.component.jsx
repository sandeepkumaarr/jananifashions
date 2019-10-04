import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../Assets/shopping-bag.svg';
import { connect } from  'react-redux';
import {toggleCardHidden} from '../../redux/cart/cart.actions';
import './Cart_Icon.styles.scss';

const CartIcon = ( {toggleCardHidden}) => (
    <div className="cart-icon" onClick={toggleCardHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCardHidden: () => dispatch(toggleCardHidden())
});

export default connect(null,mapDispatchToProps)(CartIcon);

