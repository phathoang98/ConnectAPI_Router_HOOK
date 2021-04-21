import * as Types from '../constants';


let initialState = '';


let search = (state = initialState, action) => {

    switch (action.type) {

        case Types.SEARCH_PRODUCT:
            state = action.keyword

            console.log(action);
            return state

        default:
            return state;
    }
};

export default search;