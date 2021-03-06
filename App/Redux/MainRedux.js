// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {createReducer, createActions} from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  mainRequest: ['data'],
  mainSuccess: ['payload'],
  mainFailure: ['payload'],
  mainDeletePayload: null,
})

export const MainTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null,
})

/* ------------- Selectors ------------- */

export const MainSelectors = {
  getData: (state) => state.data,
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, {data}) =>
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

export const deletePayload = (state) => {
  return state.merge({fetching: false, payload: ''})
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.MAIN_REQUEST]: request,
  [Types.MAIN_SUCCESS]: success,
  [Types.MAIN_FAILURE]: failure,
  [Types.MAIN_DELETE_PAYLOAD]: deletePayload,
})
