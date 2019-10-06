// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.

import {call, put} from 'redux-saga/effects'
import MainActions from '../Redux/MainRedux'

export function* getMain(api) {
  const response = yield call(api.apiGetList)
  if (response.data.status_code === 200) {
    yield put(MainActions.mainSuccess(response.data))
  } else {
    yield put(MainActions.mainFailure(response.data))
  }
}
