import {actionTypes} from "../types";

export const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.LOAD_CATEGORIES:
            return {...state, categories: action.payload};
        default:
            return state
    }
};