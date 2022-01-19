/**
 * author X·M
 * date 2022-01-19 20:04:53
 */

interface WelcomeProps {
  username: string
}

const Welcome: React.FC<WelcomeProps> = ({ username }) => {
  return (
    <section className='flex flex-col items-center justify-center'>
      <h3 className='font-serif text-7xl'>Welcom , {username} !</h3>
      <p className='text-lg mt-4 text-gray-800'>
        This is a welcome page created by CWC.
      </p>
    </section>
  )
}

export default Welcome;