import { createSelector } from 'reselect';

//input selector 
//Takes the whole state and just returns the slice of it, 
// one layer deep usually
//It only returns a piece of the state
const selectCart = state => state.cart;

//Gives us the cart items
//Because we used a createSelector it is now a memoir selector
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