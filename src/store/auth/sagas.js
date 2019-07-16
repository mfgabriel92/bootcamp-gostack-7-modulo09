import { call, put, all, takeLatest } from 'redux-saga/effects'
import api from '~/services/api'
import history from '~/services/history'
import { signInSuccess, failure } from './actions'
import types from './types'

export function* signIn({ payload: { email, password } }) {
  try {
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
  } catch (e) {
    yield put(failure())
  }
}

export default all([takeLatest(types.SIGN_IN, signIn)])
