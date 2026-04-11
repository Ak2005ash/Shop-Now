import React from 'react'

function Login() {
  const [currentState, setCurrentState] = React.useState('Sign Up');
  const onSubmitHandler = (e) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='items-center inline-flex gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === 'login' ? '' : <input type="text" placeholder='Name' className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent' />}
      <input type="email" placeholder='Email' className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent' />
      <input type="password" placeholder='Password' className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent' />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forget password?</p>
        {
          currentState === 'login'
            ? <p onClick={() => setCurrentState('sign up')} className='cursor-pointer'>Create account</p>
            : <p onClick={() => setCurrentState('login')} className='cursor-pointer'>Login here</p>
        }
      </div>
      <button className="px-8 py-2 mt-3 text-md font-md text-white 
                   bg-gradient-to-r from-black to-gray-800 
                   rounded-sm shadow-sm transition-all duration-300 
                   hover:from-green-900 hover:to-black hover:shadow-lg hover:scale-105 
                   active:scale-95">
        {
          currentState === 'login'
            ? 'Sign In'
            : 'Sign Up'
        }
      </button>

    </form>
  )
}

export default Login