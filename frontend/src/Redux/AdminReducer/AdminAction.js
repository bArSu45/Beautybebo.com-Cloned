import {
  PRODUCT_POST_FAILURE,
  PRODUCT_POST_SUCCESS,
  PRODUCT_POST_REQ,
} from "./AdminType";

export const product_postReq = () => {
  return { type: PRODUCT_POST_REQ };
};

export const product_postSuccess = (payload) => {
  return { type: PRODUCT_POST_SUCCESS, payload };
};

export const product_postFailure = (payload) => {
  return { type: PRODUCT_POST_FAILURE, payload };
};

export const Product_Post = () => (dispatch) => {};

export const Product_Edit = () => (dispatch) => {};
export const Product_Delete = () => (dispatch) => {};
