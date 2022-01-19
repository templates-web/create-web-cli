import { types } from 'mobx-state-tree'

function getNow() {
  const nowDate = new Date()
  return `${nowDate.getFullYear()}-${
    nowDate.getMonth() + 1
  }-${nowDate.getDate()} ${nowDate.getHours()}:${nowDate.getMinutes()}:${nowDate.getSeconds()}`
}
const Home = types
  .model({
    now: types.optional(types.string, getNow()),
  })
  .actions((self) => {
    return {
      updateNow() {
        self.now = getNow()
      },
    }
  })

export default Home
