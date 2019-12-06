import {actionTypes} from "../types";

export const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.INIT_PAGE:
            return {
                ...state,
                locales: action.payload.locales,
                categories: action.payload.categories,
                products: action.payload.products
            };
        default:
            return state
    }
};