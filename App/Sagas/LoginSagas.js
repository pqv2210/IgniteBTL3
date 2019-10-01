// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {call, put} from 'redux-saga/effects'
import LoginActions from '../Redux/LoginRedux'

export function* getLogin(api, action) {
  const {data} = action
  const response = yield call(api.apiLogin, data)
  console.log('res', response.data.status_code)
  if (response.data.status_code === 200) {
    const payload = response.data
    yield put(LoginActions.loginSuccess(payload))
  } else {
    const payload = response.data
    console.log(payload)
    yield put(LoginActions.loginFailure(payload))
  }
}
