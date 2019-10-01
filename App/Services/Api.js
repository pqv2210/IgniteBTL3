// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import apisauce from 'apisauce'

const create = (baseURL = 'https://api.bonbon24h.com.vn') => {
  const api = apisauce.create({
    baseURL,
  })

  const getRoot = () => api.get('')
  const getRate = () => api.get('rate_limit')
  const getUser = (username) => api.get('search/users', {q: username})
  const apiLogin = (data) => api.post('/api/v2/passengers/login', data)

  return {
    getRoot,
    getRate,
    getUser,
    apiLogin,
  }
}

// let's return back our create method as the default.
export default {
  create,
}
