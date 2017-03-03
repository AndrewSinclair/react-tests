import fetch from 'isomorphic-fetch'

export const LIKE = 'LIKE'
export const LOGIN = 'LOGIN'
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN'
export const ERROR_LOGIN = 'ERROR_LOGIN'


export function beginLogin() {
  return { type: LOGIN }
}

export function errorLogin(errorMsg) {
  return { type: ERROR_LOGIN, error: 'Login Failed! ' + errorMsg }
}

export function successLogin(jwt) {
  return { type: SUCCESS_LOGIN, jwt }
}

export function incrementLike(like) {
  return { type: LIKE }
}

export function fetchLogin(userCreds) {
  return function (dispatch) {
    dispatch(beginLogin())

    return fetch("https://localhost:3000/login", userCreds)
      .then(response =>  {
        if (!response.ok) {
            throw Error(response.statusText)
        }
        return response
      })
      .then(response => response.json())
      .then(json => dispatch(successLogin(json)))
      .catch(error => dispatch(errorLogin(error)))
  }
}