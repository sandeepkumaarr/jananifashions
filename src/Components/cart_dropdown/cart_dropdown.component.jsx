import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../Custom-button/custom-button.component';
import CartItem from '../cart_item/cart_item.component';
import './cart_dropdown.styles.scss';
import {selectCartItems} from '../../redux/cart/cart.selectors';
const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items" >
            {
                cartItems.map(cartitem => (
                    <CartItem key="cartitem.id" item={cartitem}/>
            ))}
        </div>
        <CustomButton>Go To CheckOut</CustomButton>
    </div>
);

// const mapStateToProps = ({cart: {cartItems}}) => ({
//     cartItems
// })


const mapStateToProps = (state) => ({
    cartItems:selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);