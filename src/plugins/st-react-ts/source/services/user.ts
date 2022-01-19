/**
 * @author X·M
 * @date 2022-01-19 10:49:15
 */

import { request } from '../utils'

export async function fetchUser() {
  return request.get('/user')
}

export const BASE_URL = '/api'
