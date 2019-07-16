import produce from 'immer'
import authTypes from '../auth/types'

const INITIAL_STATE = {
  me: null,
}

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case authTypes.SIGN_IN_SUCCESS:
      return produce(state, draft => {
        draft.me = action.payload.user
      })
    default:
      return state
  }
}
