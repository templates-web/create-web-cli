/**
 * @author X·M
 * @date 2022-01-19 16:32:16
 */

import { types, flow } from 'mobx-state-tree'

import { user } from '@/services'

const User = types
  .model({
    name: types.optional(types.string, ''),
  })
  .actions((self) => ({
    fetchUser: flow(function* () {
      try {
        const data = yield user.fetchUser()
        self.name = data.username
      } catch (e) {
        console.error(e)
      }
    }),
  }))

export default User
