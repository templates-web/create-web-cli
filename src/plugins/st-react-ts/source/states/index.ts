/**
 * @author X·M
 * @date 2022-01-19 16:23:22
 */

import { createContext, useContext } from 'react'
import { Instance, onSnapshot, types } from 'mobx-state-tree'

import User from './User'
import Global from './Global'

const RootModel = types.model({
  user: types.optional(User, {}),
  global: types.optional(Global, {
    loading: true,
  }),
})

let initialState = RootModel.create({})

export const rootStore = initialState

export type RootInstance = Instance<typeof RootModel>

const RootStoreContext = createContext<null | RootInstance>(null)

export const Provider = RootStoreContext.Provider

export function useStates() {
  const store = useContext(RootStoreContext)
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider')
  }
  return store
}

onSnapshot(rootStore, (snapshot) => {
  console.log(snapshot)
})
