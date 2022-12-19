import {
  PRODUCT_POST_FAILURE,
  PRODUCT_POST_SUCCESS,
  PRODUCT_POST_REQ,
  USER_GET_REQ,
  USER_GET_FAILURE,
  USER_GET_SUCCESS,
} from "./AdminType";

import axios from "axios";

export const user_getReq = () => {
  return { type: USER_GET_REQ };
};

export const user_getSuccess = (payload) => {
  return { type: USER_GET_SUCCESS, payload };
};
export const user_getFailure = (payload) => {
  return { type: USER_GET_FAILURE, payload };
};

export const product_postReq = () => {
  return { type: PRODUCT_POST_REQ };
};

export const product_postSuccess = (payload) => {
  return { type: PRODUCT_POST_SUCCESS, payload };
};

export const product_postFailure = (payload) => {
  return { type: PRODUCT_POST_FAILURE, payload };
};

export const POST_PRODUCT = (Token, data) => (dispatch) => {
  dispatch(product_postReq());
  axios
    .post("https://pleasant-foal-cloak.cyclic.app/products", data, {
      headers: {
        token: `Bearer ${Token}`,
      },
    })
    .then((res) => {
      console.log("success");
      return dispatch(product_postSuccess(res.data));
    })
    .catch((err) => {
      return dispatch(product_postFailure("Error"));
    });
};

export const Product_Edit = () => (dispatch) => {};
export const Product_Delete = () => (dispatch) => {};

export const GET_USER = (Token) => (dispatch) => {
  dispatch(user_getReq());
  return axios
    .get(`https://pleasant-foal-cloak.cyclic.app/users`, {
      headers: {
        token: `Bearer ${Token}`,
      },
    })
    .then((res) => {
      return dispatch(user_getSuccess(res.data));
    })
    .catch((err) => dispatch(user_getFailure("Error")));
};
