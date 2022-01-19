/**
 * @author X·M
 * @date 2022-01-19 16:23:22
 */

import { createContext, useContext } from 'react'
import { Instance, onSnapshot, types } from 'mobx-state-tree'

import { injectState } from '@/utils/request'

import Global from './Global'
import User from './User'
import Home from './Home'

const RootModel = types.model({
  user: types.optional(User, {}),
  global: types.optional(Global, {
    loading: true,
  }),
  home: types.optional(Home, {}),
})

let initialState = RootModel.create({})
injectState(initialState)

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
  // You can store data here
})
