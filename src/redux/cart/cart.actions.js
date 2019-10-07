import CardActionTypes from './cart.types';

export const toggleCardHidden = () => ({
    type: CardActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CardActionTypes.ADD_ITEM,
    payload: item
});

export const  RemoveItem = item => ({
    type: CardActionTypes.REMOVE_ITEM,
    payload:item
});

export const clearItemFromCart = item => ({
    type: CardActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});

