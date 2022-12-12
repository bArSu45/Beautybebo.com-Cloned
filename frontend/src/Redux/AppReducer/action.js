import * as types from './actionTypes'
import axios from 'axios'
import { backend_url } from '../../Utils/backendURL'

export const getDataRequest = () => {
    return {
        type: types.GET_DATA_REQUEST
    }
}

export const getDataSuccess = (payload) => {
    return {
        type: types.GET_DATA_SUCCESS,
        payload
    }
}

export const getDataFailure = () => {
    return {
        type: types.GET_DATA_FAILURE
    }
}

export const getData = (queryParams) => (dispatch) => {
    dispatch(getDataRequest())
    axios(backend_url, queryParams)
        .then((r) => {
            dispatch(getDataSuccess(r.data))
        })
        .catch((e) => {
            dispatch(getDataFailure())
        })
}
