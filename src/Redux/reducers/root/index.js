
import { combineReducers } from "redux";
import products from '../products'
import itemEditing from '../itemEditing'
import search from '../search'



/**
 *  ----- ROOT REDUCER
 */


const rootReducer = combineReducers({
    products,
    itemEditing,
    search,
})

export default rootReducer