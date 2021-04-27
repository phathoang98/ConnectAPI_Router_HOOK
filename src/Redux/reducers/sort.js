import * as Types from '../constants';


let initialState = {
    by: 'name',
    value: 1 // 1: tăng , -1: giảm
};


let sort = (state = initialState, action) => {
    switch (action.type) {
        case Types.SORT_PRODUCT:
            return {
                by: action.sort.by,
                value: action.sort.value
            }

        default:
            return { ...state }
    }
}

export default sort