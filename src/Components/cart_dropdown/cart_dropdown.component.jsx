import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../Custom-button/custom-button.component';
import CartItem from '../cart_item/cart_item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import {toggleCardHidden} from '../../redux/cart/cart.actions';

import './cart_dropdown.styles.scss';


const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items" >
            { cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
            ))

            ): (

                <span className="empty-message">Your cart is empty</span>

            )}
        </div>
        <CustomButton onClick = {()=> {            
            history.push('/checkout');
            dispatch(toggleCardHidden());
            
            }}>
            Go To CheckOut
        </CustomButton>
    </div>
);

// const mapStateToProps = ({cart: {cartItems}}) => ({
//     cartItems
// })


const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));