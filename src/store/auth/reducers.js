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
        draft.token = action.payload.token
        draft.isSigned = true
        draft.isLoading = false
        break
      case types.LOGOFF:
        draft.token = null
        draft.isSigned = false
        break
      case types.FAILURE:
        draft.isLoading = false
        break
      default:
    }
  })
}
