/**
 * author X·M
 * date 2022-01-18 21:47:32
 */

import { useEffect } from 'react';
import { observer } from 'mobx-react-lite'

import Home from './Home'

import { Provider, rootStore } from "@/states";

import './global.css'

const App: React.FC<null> = () => {

  return (
    <Provider value={rootStore}>
      <Home />
    </Provider>
  )
}

export default App;