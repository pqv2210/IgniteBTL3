// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.

import {call, put} from 'redux-saga/effects'
import MainActions from '../Redux/MainRedux'

export function* getMain(api) {
  const response = yield call(api.apiGetList)
  if (response.data.status_code === 200) {
    const payload = response.data
    yield put(MainActions.mainSuccess(payload))
  } else {
    const payload = response.data
    yield put(MainActions.mainFailure(payload))
  }
}
