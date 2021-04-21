
import { combineReducers } from "redux";
import products from '../products'
import itemEditing from '../itemEditing'

/**
 *  ----- ROOT REDUCER
 */


const rootReducer = combineReducers({
    products,
    itemEditing
})

export default rootReducer