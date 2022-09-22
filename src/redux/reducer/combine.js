import {combineReducers} from 'redux';
import cartReducer from './myCart';
import productReducer from './productReducer';

export default combineReducers({
    products:productReducer,
    carts:cartReducer,
})

