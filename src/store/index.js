import {createStore,compose} from "redux";
import {reducer} from "./reducers";
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const initialState = {
    user: {},
    categories: [],
    locales: [],
    lang: 'en'
};

export default () => createStore(reducer, initialState,composeEnhancers());