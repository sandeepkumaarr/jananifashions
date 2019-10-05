export const addItemToCart = (cartItems, cartItemToADD) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToADD.id);

    if(existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToADD.id
            ? {...cartItem, quantity:cartItem.quantity + 1}
            : cartItem
            )
    }

    return [...cartItems, {...cartItemToADD, quantity:1}]
};