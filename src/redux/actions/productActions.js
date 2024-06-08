import { productActionTypes } from "../actionTypes/productActionTypes";

const setProducts = (payload) => {
  return {
    type: productActionTypes.SET_PRODUCTS,
    data: payload,
  };
};

const getProductDetails = (payload) => {
  return {
    type: productActionTypes.GET_PRODUCT_DETAILS,
    data: payload,
  };
};

const resetProductDetails = () => {
  return {
    type: productActionTypes.RESET_PRODUCT_DETAILS,
  };
};

export { setProducts, getProductDetails, resetProductDetails };
