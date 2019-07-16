import produce from 'immer'
import types from './types'

const INITIAL_STATE = {
  token: null,
  isSigned: false,
  isLoading: false,
}

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.SIGN_IN:
        draft.isLoading = true
        break
      case types.SIGN_IN_SUCCESS:
        draft.me = action.payload.user
        draft.isLoading = false
        break
      case types.FAILURE:
        draft.isLoading = false
        break
      default:
    }
  })
}
