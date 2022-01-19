/**
 * @author X·M
 * @date 2022-01-19 09:55:55
 */

import axios from 'axios'

let globalState = null

/**
 * ! Call as early as possible !
 * See: src/states/index.ts#injectState
 */
export function injectState(state) {
  globalState = state.global
}

export const BASE_URL = '/api'

export function getUrl(url: string): string {
  return `${BASE_URL}${url}`
}

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 6000,
})

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    globalState?.setXHRLoading(config.url, true)
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
instance.interceptors.response.use(
  function ({ config, data }) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    globalState?.setXHRLoading(config.url, false)
    return data
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

export default instance
