import Image from 'next/image'
import Landingpage from '../app/Landingpage/page'
import Home2 from './Home2/page';
import Home3 from '../app/Home3/page';
import Home4 from '../app/Home4/page';
import Home5 from '../app/Home5/page';
import Home6 from '../app/Home6/page';
import Home7 from '../app/Home7/page';
import Home8 from '../app/Home8/page';
// import Home5 from '../app/Home5/page';
import Home10 from '../app/Home10/page';
import About_us from '../app/About_us/page';
import Contact_US from '../app/Contact_US/page';

export default function app() {
  return (
  <>



       
      {/* <Navbar /> */}
      {/* <Component {...pageProps} /> */}
      <div className='w-full justify-center'>
       <Home10 className='hidden w-full lg:max-h-screen '/>
        <Home2 className='w-full lg:max-h-screen'/>
        <Home3 className='w-full lg:max-h-screen'/>
        <Home4 className='w-full lg:max-h-screen'/>
        <Home5 className='w-full lg:max-h-screen'/>
        <Home6 className='w-full lg:max-h-screen'/>
        <Home7 className='w-full lg:max-h-screen'/>
        <Home8 className='w-full lg:max-h-screen'/>
        <About_us className='w-full'/>
        <Contact_US className='w-full'/>
  </div>
  
 

  </>
  )
}
