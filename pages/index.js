import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className='h-full bg-gray0 flex flex-col items-center justify-center bg-yellow-300'>
      <div className='text-3xl '>One Stop solution to all your professional needs</div>
      <Link href="/resume"><a>Get Started</a></Link>
    </div>
  )
}
