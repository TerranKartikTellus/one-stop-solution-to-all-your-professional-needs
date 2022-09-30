import { homeFoot } from '/lib/data/head Foot/foot'

import Link from 'next/link';

export default function HomeFoot(){
  return(
    <div className='fixed bottom-0 w-full pb-2'>
      <div className='w-full flex flex-row items-center justify-between px-16'>
        <div className='flex text-base flex-row items-center justify-evenly space-x-2'>
          <div className='italic'>Developed by</div>
          <div className=''>
            <Link href="https://terrankartiktellus.vercel.app/">
            <a target={"_blank"} className='flex font-semibold opacity-80 text-base  flex-row items-center justify-center italic'>
              @terrankartiktellus
            </a>
            </Link>
          </div>
        </div>



        <div className='flex flex-row space-x-8 items-center justify-evenly'>
          {homeFoot.map((i,index)=>(
            <div key={index} className=''>
              <Link href={i.link}>
                <a className=''>
                  {i.text}
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}