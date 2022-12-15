import * as types from "./CartType";

import axios from "axios";

export const Cart_REQUEST = () => {
  return { type: types.CART_REQUEST };
};

export const Cart_TOTAL = (payload) => {
  return { type: types.CART_TOTAL,payload };
};

const Cart_SUCCESS = (payload) => {
  return { type: types.CART_SUCCESS, payload };
};

const Cart_FAILURE = (payload) => {
  return { type: types.CART_ERROR, payload };
};

export const GET_CARD_DATA = () => (dispatch) => {
  dispatch(Cart_REQUEST());
  axios
    .get("https://mock-server-uj5z.onrender.com/cart")
    .then((res) => dispatch(Cart_SUCCESS(res.data)))
    .catch((err) => dispatch(Cart_FAILURE("Error")));
};


export const GET_SINGLE_CARD_DATA = (data) => (dispatch) => {
  dispatch(Cart_REQUEST());
  axios
    .get(`https://mock-server-uj5z.onrender.com/cart/${data}`)
    .then((res) => dispatch(Cart_SUCCESS([res.data])))
    .catch((err) => dispatch(Cart_FAILURE("Error")));
};


export const EDIT_CARD_DATA = (data) => (dispatch) => {
  dispatch(Cart_REQUEST());
  axios
    .post(`https://mock-server-uj5z.onrender.com/cart/${data}`)
    .then((res) => dispatch(Cart_SUCCESS(res.data)))
    .catch((err) => dispatch(Cart_FAILURE("Error")));
};
