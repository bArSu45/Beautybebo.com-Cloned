import { PRODUCT_POST_FAILURE, PRODUCT_POST_REQ, PRODUCT_POST_SUCCESS, USER_GET_FAILURE, USER_GET_REQ, USER_GET_SUCCESS } from "./AdminType";

const InitialState_User = {
  users: [],
  user_auth: false,
  isloading: false,
  iserror: false,
};

export const AdminReducer = (state = InitialState_User, { type, payload }) => {
  switch (type) {
    case USER_GET_REQ: {
      return {
        ...state,
        isloading: true,
      };
    }
    case USER_GET_SUCCESS: {
      return {
        ...state,
        isloading: false,
        user_auth: true,
        users: payload,
      };
    }

    case USER_GET_FAILURE: {
      return {
        ...state,
        isloading: false,
        user_auth: false,
        error: payload,
      };
    }

    default: {
      return state;
    }
  }
};


const InitialState_Product = {
  products: [],
  user_auth: false,
  isloading: false,
  iserror: false,
};

export const AdminProductReducer = (state = InitialState_Product, { type, payload }) => {
    
    switch (type) {
        case PRODUCT_POST_REQ: {
            return { ...state, isloading: true }
        }
        case PRODUCT_POST_SUCCESS: {
            return { ...state, user_auth: true, isloading: false }
        }
            
        case PRODUCT_POST_FAILURE: {
            return { ...state, user_auth: false, isloading: false }
        }
            
        default: {
            return state
        }

    }
}