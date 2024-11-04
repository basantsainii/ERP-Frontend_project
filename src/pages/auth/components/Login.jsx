import React from 'react'

function Login() {
  return (
    <>
    <div className='w-screen h-screen flex justify-center  bg-blue-400 '>
      <div  className=' bg-slate-400 w-1/2 h-2/3 m-auto  flex border-8 rounded-lg content-center align-middle justify-center '>
        <div className='w-[48%] m-auto h-2/3 py-5 text-center bg-blue-300 rounded-2xl'>My Name Is Basant</div>
        <div  className='w-[48%] h-2/3 m-auto text-center bg-blue-500 rounded-2xl '>
          <br /><br />
          <h1 className=' font-semibold text-2xl'>Login</h1> <br /> <br />
          <div>
            
            <input type="text" placeholder='username' className='border-0 rounded-xl p-1'/> <br /><br />
            <input type="password" placeholder='password' className='border-0 rounded-xl p-1'/><br /><br />
            <button type='submit' className='border-0 rounded-md bg-zinc-400 p-1 px-2'>Get in</button><br /><br />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login