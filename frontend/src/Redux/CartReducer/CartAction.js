import {
  CART_ERROR,
  CART_REQUEST,
  CART_SUCCESS,
  CART_UPDATE,
  CART_UPDATE_FAILED,
  CART_UPDATE_REQ,
} from "./CartType";

import axios from "axios";
import { GetLocal } from "../../Utils/localstorage";

export const Cart_REQUEST = () => {
  return { type: CART_REQUEST };
};

export const cartUpdate_Req = () => {
  return { type: CART_UPDATE_REQ };
};

export const cartUpdate_Success = (payload) => {
  return { type: CART_UPDATE, payload };
};
export const cartUpdate_Failed = (payload) => {
  return { type: CART_UPDATE_FAILED, payload };
};

const Cart_SUCCESS = (payload) => {
  return { type: CART_SUCCESS, payload };
};

const Cart_FAILURE = (payload) => {
  return { type: CART_ERROR, payload };
};

const Token = GetLocal("auth");

export const GET_CARD_DATA = () => (dispatch) => {
  dispatch(Cart_REQUEST());
  return axios
    .get("https://pleasant-foal-cloak.cyclic.app/carts", {
      headers: {
        token: `Bearer ${Token}`,
      },
    })
    .then((res) => dispatch(Cart_SUCCESS(res.data)))
    .catch((err) => dispatch(Cart_FAILURE("Error")));
};


export const ADD_CARD_DATA = (data) => (dispatch) => {
   dispatch(cartUpdate_Req());
  return axios
    .post("https://pleasant-foal-cloak.cyclic.app/carts/add", data, {
      headers: {
        token: `Bearer ${Token}`,
      },
    })
    .then((res) => {
      return dispatch(cartUpdate_Success(res.data));
    })
    .catch((err) => {
      return dispatch(cartUpdate_Failed("Error"));
    });
};

export const EDIT_CARD_DATA = (data) => (dispatch) => {
  
  dispatch(cartUpdate_Req());
  axios
    .patch(
      `https://pleasant-foal-cloak.cyclic.app/carts/${data.id}`,
      { quantity: data.quantity },
      {
        headers: {
          token: `Bearer ${Token}`,
        },
      }
    )
    .then((res) => {
      return dispatch(cartUpdate_Success(res.data));
    })
    .catch((err) => {
      return dispatch(cartUpdate_Failed("Error"));
    });
};
export const EDIT_CARD_DELETE = (data) => (dispatch) => {
  
  dispatch(cartUpdate_Req());
   axios
     .delete(`https://pleasant-foal-cloak.cyclic.app/carts/${data}`, {
       headers: {
         token: `Bearer ${Token}`,
       },
     })
     .then((res) => {
       return dispatch(cartUpdate_Success(res.data));
     })
     .catch((err) => dispatch(cartUpdate_Failed("Error")));
};


export const CARD_DELETE_ALL = () => (dispatch) => {
  dispatch(cartUpdate_Req());
  axios
    .delete(`https://pleasant-foal-cloak.cyclic.app/carts/deletemany`, {
      headers: {
        token: `Bearer ${Token}`,
      },
    })
    .then((res) => {
      return dispatch(cartUpdate_Success(res.data));
    })
    .catch((err) => dispatch(cartUpdate_Failed("Error")));
};
