import {actionTypes} from "../types";

export const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.INIT_PAGE:
            return {...state, locales : action.payload.locales};
        default:
            return state
    }
};