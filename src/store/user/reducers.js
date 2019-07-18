import produce from 'immer'
import authTypes from '../auth/types'
import types from './types'

const INITIAL_STATE = {
  me: null,
}

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case authTypes.SIGN_IN_SUCCESS:
        draft.me = action.payload.user
        break
      case types.UPDATE_USER_SUCCESS:
        draft.me = action.payload.me
        break
      default:
    }
  })
}
