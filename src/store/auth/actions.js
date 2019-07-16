import types from './types'

export function signIn(email, password) {
  return {
    type: types.SIGN_IN,
    payload: {
      email,
      password,
    },
  }
}

export function signInSuccess(token, user) {
  return {
    type: types.SIGN_IN_SUCCESS,
    payload: {
      token,
      user,
    },
  }
}

export function signUp(name, email, password) {
  return {
    type: types.SIGN_UP,
    payload: {
      name,
      email,
      password,
    },
  }
}

export function failure() {
  return {
    type: types.FAILURE,
  }
}
