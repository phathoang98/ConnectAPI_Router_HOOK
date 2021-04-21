

/**
 *  ----------- FILE khởi tạo STORE
 */

import { createStore, applyMiddleware, compose } from "redux";

// --- Import File ROOT reducers

import rootReducer from "./reducers/root";

// ---- Import Redux thunk

import thunk from "redux-thunk";

// ----- Import Redux Dev Tool

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// ------ Khởi Tạo STORE ()

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;