
import { combineReducers } from "redux";
import products from '../products'
import itemEditing from '../itemEditing'
import search from '../search'
import sort from '../sort'




/**
 *  ----- ROOT REDUCER
 */


const rootReducer = combineReducers({
    products,
    itemEditing,
    search,
    sort
})

export default rootReducer