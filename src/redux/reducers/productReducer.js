import { productActionTypes } from "../actionTypes/productActionTypes";

const initialState = {
  products: [],
  product: {},
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productActionTypes.SET_PRODUCTS:
      return { ...state, products: action.data };

    case productActionTypes.GET_PRODUCT_DETAILS:
      return { ...state, product: action.data };

    case productActionTypes.RESET_PRODUCT_DETAILS:
      return { ...state, product: {} };

    default:
      return state;
  }
};

export default productReducer;
