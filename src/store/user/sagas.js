import { call, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import { updateUserSuccess, updateUserFailure } from './actions'
import api from '../../services/api'
import types from './types'

export function* updateUser({ payload }) {
  const { name, email, ...rest } = payload.data
  const me = Object.assign({ name, email }, rest.oldPassword ? rest : {})

  try {
    const response = yield call(api.put, 'users', me)
    toast.success('Your profile has been updated')
    yield put(updateUserSuccess(response.data.user))
  } catch (e) {
    toast.error('Something went wrong')
    yield put(updateUserFailure())
  }
}

export default all([takeLatest(types.UPDATE_USER, updateUser)])
