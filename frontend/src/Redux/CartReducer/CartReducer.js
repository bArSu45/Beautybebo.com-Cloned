import { GetLocal } from "../../Utils/localstorage";
import * as types from "./CartType";

const IntialState = {
    user: GetLocal("token") || false,
    Cart_Items: [],
    auth:false,
    loading: false,
    error:false,
};

export const CartReducer = (state = IntialState, { type, payload }) => {
   
    switch (type) {
        case types.CART_REQUEST: {
            return { ...state, loading: true }
        }
        case types.CART_SUCCESS: {
            return { ...state, Cart_Items: payload, loading: false, auth: true, error: false }
        }
        case types.CART_ERROR: {
            return { ...state, Cart_Items: [], loading: false, auth: false, error: true }
        }
        default: {
            return state; 
       }     
  }
};
