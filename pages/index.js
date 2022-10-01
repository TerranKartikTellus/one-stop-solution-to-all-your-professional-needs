import Link from 'next/link'
import styles from '../styles/Home.module.css'
import HeadTag from '../components/common/head'

export default function Home() {
  return (
    <div className='h-full bg-gray0 flex flex-col items-center justify-center text-center bg-yellow-300'>
      <HeadTag title="Venda | Build your Resume Today " cardTitle="Build your Resume, Cover Letter Today" description="One Stop solution to all your professional needs"></HeadTag>      
      <div className='text-3xl '>One Stop solution to all your professional needs</div>
      <Link href="/resume"><a className='mt-14 border-b-2 border-black'>Get Started</a></Link>
    </div>
  )
}
