import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

export default function PrivateRoutes({ children }) {
    const location = useLocation()
    const isAuth = useSelector((store) => {
        return store.AuthReducer.isAuth
    })

    if (!isAuth) {
        return <Navigate to='/login' state={location.pathname} replace />
    }
    return children
}
