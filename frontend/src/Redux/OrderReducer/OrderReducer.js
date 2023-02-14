import {
  POST_ORDER_SUCCESS,
  POST_ORDER_REQ,
  POST_ORDER_FAILED,
  GET_ORDER_REQ,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
} from "./OrderType";

const initialOrders = {
  authOrder: false,
  orderLoading: false,
  error: false,
};

export const OrderPostReducer = (state = initialOrders, { type, payload }) => {
  switch (type) {
    case POST_ORDER_REQ: {
      return { ...state, orderLoading: true };
    }
    case POST_ORDER_SUCCESS: {
      return { ...state, orderLoading: false, authOrder: true };
    }
    case POST_ORDER_FAILED: {
      return { ...state, orderLoading: false, authOrder: false, error: true };
    }
    default: {
      return state;
    }
  }
};

const initialOrders2 = {
  Orders: [],
  orderLoading: false,
  error: false,
};

export const OrderGetReducer = (state = initialOrders2, { type, payload }) => {
    console.log(payload)
  switch (type) {
    case GET_ORDER_REQ: {
      return { ...state, orderLoading: true };
    }
    case GET_ORDER_SUCCESS: {
      return { ...state, orderLoading: false, Orders: payload };
    }
    case GET_ORDER_FAILED: {
      return { ...state, orderLoading: false,Orders:[], error: true };
    }
    default: {
      return state;
    }
  }
};
