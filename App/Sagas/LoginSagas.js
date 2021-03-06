// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {call, put} from 'redux-saga/effects'
import LoginActions from '../Redux/LoginRedux'

export function* getLogin(api, action) {
  const {data} = action
  const response = yield call(api.apiLogin, data)
  if (response.ok) {
    if (response.data.status_code === 200) {
      yield put(LoginActions.loginSuccess(response.data))
    }
  } else {
    yield put(LoginActions.loginFailure(response.data))
  }
}
