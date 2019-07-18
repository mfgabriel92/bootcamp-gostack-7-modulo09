import types from './types'

export function updateUser(data) {
  return {
    type: types.UPDATE_USER,
    payload: { data },
  }
}

export function updateUserSuccess(me) {
  return {
    type: types.UPDATE_USER_SUCCESS,
    payload: { me },
  }
}

export function updateUserFailure() {
  return {
    type: types.UPDATE_USER_FAILURE,
  }
}
