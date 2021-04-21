import * as Types from '../constants'


// -- State này chứa Dữ Liệu các sản phẩm được Edit

let initialState = {}

const itemEditing = (state = initialState, action) => {
    switch (action.type) {

        case Types.EDIT_PRODUCT:
            return action.product

        default:
            return { ...state }
    }
}

export default itemEditing