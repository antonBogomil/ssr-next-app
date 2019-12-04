import {actionTypes} from "../types";



export const initPage = (data)=>{
    return {
        type: actionTypes.INIT_PAGE,
        payload: data
    }
};