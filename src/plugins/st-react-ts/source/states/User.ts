/**
 * @author X·M
 * @date 2022-01-19 16:32:16
 */

import { types } from 'mobx-state-tree'

const User = types
  .model({
    name: types.optional(types.string, ''),
  })
  .actions((self) => ({
    updateName(name: string) {
      self.name = name
    },
  }))

export default User
