/**
 * author X·M
 * date 2022-01-18 21:47:32
 */

import { useEffect } from 'react';
import { observer } from 'mobx-react-lite'

import { user } from '@/services'
import { Provider, rootStore } from "@/states";

import './global.css'

interface AppProps { }

const App: React.FC<IProps> = () => {
  useEffect(() => {
    user.fetchUser().then(res => {
      rootStore.user.updateName(res.username)
    })
  }, [])

  return (
    <Provider value={rootStore}>
      {
        rootStore.global.xhrLoading.get('/user') ? <div>loading...</div> : <div>{rootStore.user.name}</div>
      }
    </Provider>
  )
}

export default observer(App);