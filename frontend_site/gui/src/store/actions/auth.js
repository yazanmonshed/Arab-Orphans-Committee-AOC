import * as actionType from './actionType'
import axios from 'axios'

export const authStart = () => {
    return {
        type: actionType.AUTH_START
    }
}


export const authSuccess = (token) => {
    return {
        type : actionType.AUTH_SUCCESS,
        token : token
    }
}  


export const authFail = (error) => {
    
    return {
        type: actionType.AUTH_FAIL,
        error: error
    }
}

export const logout = (token) => {
    localStorage.removeItem('user')
    localStorage.removeItem('expirationDate')

    return {
        type:  actionType.AUTH_LOGOUT,
        token: token
    }

}

export const checkAuthtimeout  = expirationTime => {
    return dispatch => {
       setTimeout(() => {

            dispatch(logout())
       }, expirationTime * 1000)
    }
}

export const authLogin = (username, password) => {

    return dispatch => {
        dispatch(authStart())
        axios.post('127.0.0.1:8000/rest-auth/login/', {
            username: username,
            password: password
        })
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000)
            localStorage.setItem('token', token)
            localStorage.setItem('expirationDate', expirationDate)
            dispatch(authSuccess(token))
            dispatch(checkAuthtimeout(3600))

        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}


// Singup Page Here 
export const authSignup = (username,email, password1, password2) => {

    return dispatch => {
        dispatch(authStart())
        axios.post('127.0.0.1:8000/rest-auth/registration/', {
            username: username,
            email: email,
            password1: password1,
            password2: password2
        })
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000)
            localStorage.setItem('token', token)
            localStorage.setItem('expirationDate', expirationDate)
            dispatch(authSuccess(token))
            dispatch(checkAuthtimeout(3600))
 
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}





export const authCheckState = () => {
    return dispatch => {
        const token  = localStorage.getItem('token')

        if (token === undefined) {

            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if (expirationDate <= new Date())   {
                dispatch(logout())
            } else {
                dispatch(authSuccess(token))
                dispatch(checkAuthtimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ))
            }
          }
    }
}  