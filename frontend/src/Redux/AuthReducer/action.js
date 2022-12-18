import * as types from "./actionTypes";
import axios from "axios";
import { backend_url } from "../../Utils/backendURL";

export const getUserRequest = () => {
  return {
    type: types.GET_USER_REQUEST,
  };
};

export const getUserSuccess = (payload) => {
  return {
    type: types.GET_USER_SUCCESS,
    payload,
  };
};

export const getUserFailure = () => {
  return {
    type: types.GET_USER_FAILURE,
  };
};

export const Admin_request = () => (dispatch) => {
  dispatch(getUserRequest());
  return axios
    .post(`${backend_url}/users/login`, queryParams)
    .then((r) => {
      return dispatch(getUserSuccess(r.data.token));
    })
    .catch((e) => {
      dispatch(getUserFailure());
    });
};
