import '../styles/globals.css'
import { useRouter } from 'next/router'
import HomeHead from '../components/common/header'
import HomeFoot from '../components/common/footer'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  let path = router.asPath;

return <main className='fon bg-gradient-to-tr from-gray-400/10 via-gray-50/50 to-gray-500/30 hscreen '>
 
      <div className='bgred-400 h-screen'>
        {/* <HomeHead></HomeHead> */}
         <Component {...pageProps} />
         {/* <HomeFoot></HomeFoot> */}
      </div>
 
    </main>
}

export default MyApp
