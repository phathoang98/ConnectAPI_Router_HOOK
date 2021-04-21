
import * as Types from '../constants'

/**
 *  ----------- Products Reducers
 */

let initialState = []

let findIndex = (products, id) => {
    let result = -1;

    products.forEach((product, index) => {
        if (product.id === id) {
            result = index
        }
    })

    return result
}


const products = (state = initialState, action) => {

    let index = -1;
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
            index = findIndex(state, product.id)
            state[index] = product
            return [...state]


        default:
            return [...state]
    }
}

export default products

