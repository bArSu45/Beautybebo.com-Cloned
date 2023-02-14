import axios from "axios";
import {
  POST_ORDER_SUCCESS,
  POST_ORDER_REQ,
  POST_ORDER_FAILED,
  GET_ORDER_REQ,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
} from "./OrderType";

export const Post_req = () => {
  return { type: POST_ORDER_REQ };
};

export const Post_Success = (payload) => {
  return { type: POST_ORDER_SUCCESS, payload };
};

export const Post_Failed = (payload) => {
  return { type: POST_ORDER_FAILED, payload };
};

export const Get_req = () => {
  return { type: POST_ORDER_REQ };
};

export const Get_Success = (payload) => {
  return { type: POST_ORDER_SUCCESS, payload };
};

export const Get_Failed = (payload) => {
  return { type: POST_ORDER_FAILED, payload };
};

export const POST_ORDER = (data, auth) => async (dispatch) => {
    dispatch(Post_req());
    
  try {
    let res = await axios.post(
      "https://pleasant-foal-cloak.cyclic.app/orders",
      data,
      {
        headers: {
          token: `Bearer ${auth}`,
        },
      }
    );
      
      dispatch(Post_Success());
  
  } catch(err) {
      console.log(err);
    dispatch(Post_Failed());
  }
};


export const GET_ORDER = (auth) => async (dispatch) => {
  dispatch(Get_req());
  try {
    let res = await axios.get("https://pleasant-foal-cloak.cyclic.app/orders", {
      headers: {
        token: `Bearer ${auth}`,
      },
    });
      dispatch(Get_Success(res.data));
      return res.data;
  } catch (err) {
    dispatch(Get_Failed());
  }
};
