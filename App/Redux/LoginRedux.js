// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {createReducer, createActions} from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  loginRequest: ['data'],
  loginSuccess: ['payload'],
  loginFailure: ['payload'],
  loginDeletePayload: [''],
})

export const LoginTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null,
})

/* ------------- Selectors ------------- */

export const LoginSelectors = {
  getData: (state) => state.data,
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, data) =>
  state.merge({fetching: true, data, payload: null})

// successful api lookup
export const success = (state, action) => {
  const {payload} = action
  return state.merge({fetching: false, payload})
}

// Something went wrong somewhere.
export const failure = (state, action) => {
  const {payload} = action
  return state.merge({fetching: false, payload})
}

export const deletepayload = (state) =>
  state.merge({fetching: false, payload: ''})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,
  [Types.LOGIN_DELETE_PAYLOAD]: deletepayload,
})
