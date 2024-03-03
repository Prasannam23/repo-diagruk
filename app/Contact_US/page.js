import React from 'react'
import Image from 'next/image';
import sense5 from '../../public/Rectangle 234.png';
import sense1 from '../../public/map-pin.png';
import sense2 from '../../public/mail.png';
import sense3 from '../../public/phone-call.png';



const Contact = () => {
  return (
    <>
      <div className=' hidden lg:flex space-x-8 lg:space-x-44 w-full absolute z-[-10] lg:h-96 lg:flex-cols'>
     <div className= 'lg:h-1/2 w-full'>
     <svg width="106" height="446" viewBox="0 0 106 446" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="-325" y="77.4062" width="183.103" height="519.408" rx="91.5514" transform="rotate(-38.6688 -325 77.4062)" fill="url(#paint0_linear_752_799)" fill-opacity="0.2"/>
<defs>
<linearGradient id="paint0_linear_752_799" x1="-233.449" y1="77.4062" x2="-262.886" y2="558.788" gradientUnits="userSpaceOnUse">
<stop stop-color="#7373FF" stop-opacity="0"/>
<stop offset="0.819" stop-color="#9400D3"/>
</linearGradient>
</defs>
</svg>


     </div>
     <div className= 'lg:h-1/2 w-full lg:mt-10'>
     <svg width="394" height="446" viewBox="0 0 394 446" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="-37" y="77.4062" width="183.103" height="519.408" rx="91.5514" transform="rotate(-38.6688 -37 77.4062)" fill="url(#paint0_linear_752_550)" fill-opacity="0.2"/>
<defs>
<linearGradient id="paint0_linear_752_550" x1="54.5514" y1="77.4062" x2="25.1141" y2="558.788" gradientUnits="userSpaceOnUse">
<stop offset="0.236111" stop-color="#9400D3"/>
<stop offset="0.9999" stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="#7373FF" stop-opacity="0"/>
</linearGradient>
</defs>
</svg> 
     </div>
     <div className= 'lg:h-1/2 w-full lg:mt-16'>
     <svg width="352" height="394" viewBox="0 0 352 394" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="-37" y="77.4062" width="183.103" height="452.182" rx="91.5514" transform="rotate(-38.6688 -37 77.4062)" fill="url(#paint0_linear_819_407)" fill-opacity="0.2"/>
<defs>
<linearGradient id="paint0_linear_819_407" x1="54.5514" y1="77.4062" x2="71.4647" y2="500.792" gradientUnits="userSpaceOnUse">
<stop offset="0.236111" stop-color="#9400D3"/>
<stop offset="1" stop-color="#7373FF" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>

      </div>
     <div className= 'lg:h-1/2 w-full lg:mt-28'>
     <svg width="175" height="320" viewBox="0 0 175 320" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="-37" y="77.3008" width="183.103" height="620.785" rx="91.5514" transform="rotate(-38.6688 -37 77.3008)" fill="url(#paint0_linear_752_567)" fill-opacity="0.2"/>
<defs>
<linearGradient id="paint0_linear_752_567" x1="54.5514" y1="77.3008" x2="86.384" y2="657.735" gradientUnits="userSpaceOnUse">
<stop offset="0.236111" stop-color="#9400D3"/>
<stop offset="1" stop-color="#7373FF" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
     </div>
     </div>
    <div className='grid grid-rows-1'>
     <div className='grid grid-rows-3 py-8 gap-6 w-96 h-96 lg:w-full'> 
     <div className='lg:h-36 h-10'>
     <p className='lg:text-8xl text-5xl text-center lg:font-bold lg:text-8xl lg:font-bold lg:ml-5 text-gray-500 lg:text-center w-full drop-shadow-lg lg:ml-px ml-8'>Contact Us</p>
     </div>
     <div className='h-8 mt-12 items-center'>
     <p className='lg:text-5xl text-lg text-center lg:font-bold lg:font-bold lg:ml-5 text-gray-700 lg:text-center lg:w-full drop-shadow-lg lg:ml-px ml-16'>We’d <span className='text-purple-500'>Love</span> to Hear From you</p>
     </div>
     <div className='w-full flex justify-center items-end'>
     <div className='text-center lg:w-10/12 lg:w-5/12'><p className='lg:ml-20 w-80 lg:w-9/12 text-base text-center lg:ml-px ml-7'>An individual wanting to get in touch or home based business or large enterprise we welcome all!</p></div>
     </div>
     </div>
     <div>
     <div className='justify-center mb-40 '>
<div className='lg:flex w-full absolute lg:mt-4 z-[0] h-[60vh] lg:h-[90vh]'>
  <Image className='w-full absolute h-[90vh] lg:h-12/12' src={sense5}/>
</div>
<div className='flex justify-center h-[90vh] w-full'>
<div className='flex w-10/12 h-6/6 '>
  <div className='lg:w-6/12 w-8/12 flex ml-9 mt-64 justify-center lg:justify-end items-center absolute h-4/6 lg:h-4/6 rounded-lg ... bg-purple-500  lg:ml-72 lg:mt-52'>
    <div className='flex'>
        <div className='w-96'>
            <div>
                <p className='lg:text-4xl text-white text-center font-semibold'>Get in touch</p>
                <p className='text-sm text-center text-white'>Feel free to drop us a line below</p>
            </div>
     <form className='mt-8 grid grid-rows-1 justify-center'>
     <input className='bg-purple-400 w-48 lg:w-80 text-white rounded-xl  h-10' type="email" id="email" name="email" placeholder="Your name" />
     <input className='bg-purple-400 w-48 lg:w-80 text-white mt-8 rounded-xl  h-10' type="password" id="password" name="password" placeholder="Password" />
     
     <textarea className='rounded-lg h-16 lg:h-36 mt-8 w-48 lg:w-80 bg-purple-400' id="comment" placeholder="Type your comment here..."/>
     <button className='w-36 h-10 mt-8 bg-white text-black  rounded-lg' type="send"><h1 className='h-10 pt-2'>Send</h1></button>
     </form>
     </div>
    </div>
  </div>
  
  <div className='bg-white grid grid-rows-4 justify-center items-center relative lg:mt-64 lg:ml-40 rounded-lg ... h-2/5 ml-20 mt-8 w-7/12 lg:h-3/5 lg:w-3/12 z-[10]'>
     <div className='flex items-center justify-center lg:ml-8'>
      <p className='lg:text-3xl text-xl text-center lg:text-start font-semibold'>Contact us</p>
     </div>
     <div className='ml-2 lg:px-8 flex flex-cols text-xs'>
     <Image className='h-7 mt-4' src={sense1}/>

       <p className='ml-4'>DiagRuk (A unit of a Sirajex Diagnostics Pvt. Ltd.) 
Address: 206, 3rd Floor, Silver Homes-2, Opposite 14th Avenue, Greater Noida, U.P. - 201301</p> 
     </div>
     <div className='ml-2 flex flex-cols lg:px-8'>
     <Image className='h-7 mt-4' src={sense2}/>
        <p className='ml-4 text-xs mt-6'>hello@lorenepsium.com</p>
     </div>
     <div className='ml-2 text-sm lg:px-8 flex flex-cols text-xs'>
     <Image className='h-7 mt-1' src={sense3}/>
     <div className='ml-4'>
       <p>+91 45345 45345</p>
       <p>+91 45345 45345</p> 
       </div>
     </div>

  </div>
</div>
</div>
</div>


     </div>

     </div>
     
     </>
    
  )
}

export default Contact
