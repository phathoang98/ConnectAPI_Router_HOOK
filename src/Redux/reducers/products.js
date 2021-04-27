
import * as Types from '../constants'
import _ from 'lodash'

/**
 *  ----------- Products Reducers
 */

let initialState = []


const products = (state = initialState, action) => {

    let { product } = action

    switch (action.type) {

        case Types.FETCH_PRODUCTS:
            state = action.products
            return [...state]

        case Types.ADD_PRODUCT:
            state.push(action.product)
            return [...state]

        case Types.DELETE_PRODUCT:
            let productsUpdate = [...state];
            let productDelete = productsUpdate.filter(product => product.id !== action.id)

            state = productDelete
            return [...state]

        case Types.UPDATE_PRODUCT:

            // Sử dụng "lodash" với hàm findIndex tự có sẵn 
            let index = _.findIndex(state, (item) => {
                return item.id === product.id
            })

            state[index] = product
            return [...state]


        default:
            return [...state]
    }
}

export default products

