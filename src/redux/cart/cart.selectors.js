import { createSelector } from 'reselect';

//input selector 
const selectCart = state => state.cart;

//Gives us the cart items
export const selectCartItems = createSelector(
    [selectCart], 
    cart => cart.cartItems
);

//Gives us a total quantity of all the cart items
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) =>
                accumulatedQuantity + cartItem.quantity,
                0
        )
);