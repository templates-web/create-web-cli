import { types } from 'mobx-state-tree'

const Global = types
  .model({
    loading: types.boolean,
    xhrLoading: types.map(types.boolean),
  })
  .actions((self) => {
    return {
      setLoading() {},
      setXHRLoading(url: string, loading: boolean) {
        self.xhrLoading.set(url, loading)
      },
    }
  })

export default Global
