/**
 * author X·M
 * date 2022-01-19 19:56:52
 */

import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

import Welcome from '@/components/Welcome'

import { useStates } from '@/states'


interface HomeProps { }

const Home: React.FC<HomeProps> = () => {
  const { user, global, home } = useStates()

  useEffect(() => {
    user.fetchUser()

    const timer = window.setInterval(() => {
      home.updateNow()
    }, 1000)

    return () => {
      window.clearInterval(timer)
    }
  }, [])

  return (
    <main className='h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center flex-col'>
      {
        global.xhrLoading.get('/user') ? <span>loading....</span> : <Welcome username={user.name} />
      }
      <time className='text-4xl text-red-600 mt-8'>
        {home.now}
      </time>
    </main>
  )
}

export default observer(Home);