import { call, put, all, takeLatest } from 'redux-saga/effects'
import api from '~/services/api'
import history from '~/services/history'
import { signInSuccess } from './actions'
import types from './types'

export function* signIn({ payload: { email, password } }) {
  const { data } = yield call(api.post, 'auth', {
    email,
    password,
  })

  if (!data.user.provider) {
    console.tron.error('User is not a provider.')
    return
  }

  const { token, user } = data
  yield put(signInSuccess(token, user))

  history.push('/dashboard')
}

export default all([takeLatest(types.SIGN_IN, signIn)])
