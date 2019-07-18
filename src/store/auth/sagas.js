import { call, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import api from '../../services/api'
import history from '../../services/history'
import { signInSuccess, failure } from './actions'
import types from './types'

export function setToken({ payload }) {
  if (!payload) return

  const { token } = payload.auth

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }
}

export function* signIn({ payload: { email, password } }) {
  try {
    const { data } = yield call(api.post, 'auth', {
      email,
      password,
    })

    if (!data.user.provider) {
      toast.error('User is not a provider')
      return
    }

    const { token, user } = data
    yield put(signInSuccess(token, user))

    api.defaults.headers.Authorization = `Bearer ${token}`

    toast.success(`Welcome, ${user.name}`)
    history.push('/dashboard')
  } catch (e) {
    toast.error('Wrong credentials')
    yield put(failure())
  }
}

export function* signUp({ payload: { name, email, password } }) {
  try {
    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    })

    toast.success('Account successfully created. You may login now.')
    history.push('/dashboard')
  } catch (e) {
    toast.error('Something went wrong')
    yield put(failure())
  }
}

export function logoff() {
  history.push('/')
  toast.warn('You have logged off')
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(types.SIGN_IN, signIn),
  takeLatest(types.SIGN_UP, signUp),
  takeLatest(types.LOGOFF, logoff),
])
