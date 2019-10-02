// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import apisauce from 'apisauce'

const create = (baseURL = 'http://api.dev.bonbon24h.com.vn') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      Accept: 'application/json',
    },
  })
  const getRoot = () => api.get('')
  const getRate = () => api.get('rate_limit')
  const getUser = (username) => api.get('search/users', {q: username})

  const apiLogin = (data) => api.post('/api/v2/passengers/login', data)
  const apiGetList = () => api.get('/api/v2/passengers/drivers')

  return {
    getRoot,
    getRate,
    getUser,
    apiLogin,
    apiGetList,
    api,
  }
}

// let's return back our create method as the default.
export default {
  create,
}
