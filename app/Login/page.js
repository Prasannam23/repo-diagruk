import React from 'react'
import sense from '../../public/Rectangle 85.png';
import sense1 from '../../public/Group 81.png';
import sense2 from '../../public/icons8-twitter-30.png';
import sense3 from '../../public/icons8-google-30.png';
import Image from 'next/image'
const login = () => {
  return (
    <div>
      <div className='lg:flex  w-full lg:h-screen'>
        
        <div className='flex justify-center items-center bg-red-200 px-20 h-full w-full'>
        <div className='grid grid-rows-2 gap-72 lg:grid bg-red-300 lg:grid-rows-1 w-4/12 lg:h-full'>
          <div className='grid grid-rows-2 w-full h-full justify-center items-center'>
          <div className=''>
            <p className='text-5xl'>Welcome back,</p>
            <p className='text-5xl text-purple-600'>Log in</p>
            </div>
            <div className=''>
            <form className='grid grid-rows-5 gap-5'>
            <input className='bg-white w-80 border border-b-2 border-black border-t-transparent border-r-transparent border-l-transparent h-10' type="email" id="email" name="email" placeholder="Email" />
            <input className='bg-white w-80 border border-b-2 border-black border-t-transparent border-r-transparent border-l-transparent h-10' type="password" id="password" name="password" placeholder="Password" />
             <button className='w-80 h-10 bg-black text-white border border-black rounded-lg' type="submit"><h1 className='h-10 pt-2'>Log in</h1></button>
             <button className='w-80 flex gap-5 justify-center h-10 border items-center border-2 border-black rounded-lg' type="submit"><Image className='' src={sense3}/><p className='font-semibold text-xl'>Sign in with Google</p></button>
             <button className='w-80 h-10 bg-text-white border flex gap-5 justify-center items-center font-semibold border-2 border-black rounded-lg' type="submit"><Image className='' src={sense2}/><p className='font-semibold text-xl'>Sign in with Twitter</p></button>
    </form>
            </div>
            </div>
            </div> 
          <div className='lg:flex lg:justify-center justify-end items-center lg:w-8/12 w-full h-2/6 lg:h-full'>
          <Image className='lg:w-7/12 w-7/12 absolute py-6 h-2/6 lg:h-full z-[10]' src={sense}/>
          <Image className='lg:w-10/12 w-full lg:h-5/6 h-2/6 z-[10]' src={sense1}/>
          </div>
          {/* <div className='flex justify-center items-center w-full h-full'>
          <Image className='w-10/12 h-5/6 z-[10]' src={sense1}/>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default login
