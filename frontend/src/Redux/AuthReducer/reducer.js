import { GetLocal, SetLocal } from '../../Utils/localstorage';
import * as types from './actionTypes'

const initialState = {
    isAuth: GetLocal('isAuth') || false,
    token: '',
    isAuthLoading: false,
    isAuthError: false
}

export const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.GET_USER_REQUEST: {
            return {
                ...state, isLoading: true,
            }
        }
        case types.GET_USER_SUCCESS: {
            SetLocal('isAuth', true)
            return {
                ...state, isLoading: false, token: payload, isAuth: true
            }
        }
        case types.GET_USER_FAILURE: {
            SetLocal('isAuth', false)
            return {
                ...state, isLoading: false, isError: true, token: '', isAuth: false
            }
        }
        default: return state
    }
}