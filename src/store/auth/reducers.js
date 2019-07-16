import produce from 'immer'
import types from './types'

const INITIAL_STATE = {
  token: null,
  isSigned: false,
  isLoading: false,
}

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SIGN_IN_SUCCESS:
      return produce(state, draft => {
        draft.token = action.payload.token
        draft.isSigned = true
      })
    default:
      return state
  }
}
