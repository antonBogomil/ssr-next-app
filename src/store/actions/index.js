import {actionTypes} from "../types";

export const loadCategories = (categories)=>{
    return {
        type: actionTypes.LOAD_CATEGORIES,
        payload: categories
    }
};