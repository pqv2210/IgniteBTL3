// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {takeLatest, all} from 'redux-saga/effects'
import API from '../Services/Api'

import {StartupTypes} from '../Redux/StartupRedux'
import {GithubTypes} from '../Redux/GithubRedux'
import {LoginTypes} from '../Redux/LoginRedux'
import {MainTypes} from '../Redux/MainRedux'

import {startup} from './StartupSagas'
import {getUserAvatar} from './GithubSagas'
import {getLogin} from './LoginSagas'
import {getMain} from './MainSagas'
import {AsyncStorage} from 'react-native'

export const api = API.create()
AsyncStorage.getItem('token').then((token) => {
  api.api.setHeader('Authorization', 'Bearer ' + token)
})
export default function* root() {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),

    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api),

    takeLatest(LoginTypes.LOGIN_REQUEST, getLogin, api),

    takeLatest(MainTypes.MAIN_REQUEST, getMain, api),
  ])
}
