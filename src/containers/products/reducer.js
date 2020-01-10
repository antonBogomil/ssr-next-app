export const actionTypes = {
  LOADED_MORE: 'LOADED_MORE',
  LOADED_NEW: 'LOADED_NEW',
  LOADING: 'LOADING',
};

export const productsReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.LOADED_MORE:
      return {
        ...state,
        loading: false,
        products: [...state.products, ...action.payload.products],
        lastNo: action.payload.lastNo,
      };
    default:
      return state;
  }
};
