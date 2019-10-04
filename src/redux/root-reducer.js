import {combineReducers} from 'redux';
import userReducer from '../../src/redux/user/user.reducer'
import cartReducer from './cart/cart.reducer';

//Below gives us a one combined Object
export default combineReducers ({
        user:userReducer,
        cart:cartReducer
});