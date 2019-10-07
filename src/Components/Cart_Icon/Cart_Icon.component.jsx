import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../Assets/shopping-bag.svg';
import { connect } from  'react-redux';
import {createStructuredSelector} from 'reselect';
import {toggleCardHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import './Cart_Icon.styles.scss';

const CartIcon = ( {toggleCardHidden, itemCount}) => (
    <div className="cart-icon" onClick={toggleCardHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCardHidden: () => dispatch(toggleCardHidden())
});

//replace the code with our selector call
const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);

