import {combineReducers} from 'redux';
import userReducer from '../../src/redux/user/user.reducer'

//Below gives us a one combined Object
export default combineReducers ({
        user:userReducer
});