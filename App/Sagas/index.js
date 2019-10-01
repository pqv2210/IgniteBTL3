// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {takeLatest, all} from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

import {StartupTypes} from '../Redux/StartupRedux'
import {GithubTypes} from '../Redux/GithubRedux'
import {LoginTypes} from '../Redux/LoginRedux'

import {startup} from './StartupSagas'
import {getUserAvatar} from './GithubSagas'
import {getLogin} from './LoginSagas'

const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

export default function* root() {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),

    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api),

    takeLatest(LoginTypes.LOGIN_REQUEST, getLogin, api),
  ])
}
