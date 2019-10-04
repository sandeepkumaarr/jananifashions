import React from 'react';
import CustomButton from '../Custom-button/custom-button.component';

import './cart_dropdown.styles.scss';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items" />
        <CustomButton>Go To CheckOut</CustomButton>
    </div>
);


export default CartDropdown;