import { homeHead } from '/lib/data/head Foot/head'

import Link from 'next/link';

export default function HomeHead(){
  return(
    <div className='bg-gradient-to-b fixed top-0 w-full from-black/30 via-black/10 pt-10 to-transparent flex flex-row items-center justify-between lg:px-16 '>
      <div className='text-2xl'>
        Venda
      </div>
      <div className='flex flex-row items-center justify-between space-x-4 text-lg '>
      {homeHead.map((i,index)=>(
        <div key={index} className="bg-green400 ">
          <Link href={i.link}>
            <a className='hover:tracking-normal tracking-wide transition-all duration-200 ease-in-out'>
              {i.text}
            </a>
          </Link>
        </div>
      ))}
      <div className='bg-red400  w-[200px] text-center'>
        <Link href="/">
            <a className='border-2 border-cyan-500 p-2.5 hover:p-1.5 hover:bg-gradient-to-tr hover:from-cyan-500/40 hover:to-cyan-800 hover:border-cyan-600/30 text-center w-full  transition-all duration-200 ease-in-out'>
              Login / Signup
            </a>
          </Link>
      </div>
      </div>
    </div>
  );
}