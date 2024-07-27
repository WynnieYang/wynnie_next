'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoMdArrowRoundBack } from "react-icons/io";

function Nav() {
    const pathname = usePathname();
    const navList = ['Home', 'Introduction']
  return (
    <div className='ml-12 pr-8 h-12 lg:h-16 flex items-center justify-between border-solid border-b-2 border-[#778DA9]'>
        <Link href={'/Home'}><Image className='cursor-pointer' src={`${process.env.NODE_ENV === 'production' ? '/wynnie_next' : ''}/logo.png`} alt='logo' width={40} height={40} priority unoptimized /></Link>
        <div className='flex items-center justify-start flex-row '>
            { navList.map((nav,navIndex) => (
                nav === 'Introduction' ? <Link href={'https://www.cakeresume.com/s--iqooiggPAm_ICL46VU3z_w--/wynnieyang88'} key={`${nav}${navIndex}`} className='w-24 flex items-center justify-center'><span className='text-E0E1DD text-lg hover:text-415A77 cursor-pointer'>{nav}</span></Link>
                : !pathname.includes('Home')? <Link href={'/Home'} key={`${nav}${navIndex}`}  className='w-20 flex items-center justify-center'><IoMdArrowRoundBack className='text-E0E1DD text-2xl hover:text-415A77 cursor-pointer'/></Link> : <></>
            ))}
        </div>
    </div>
  )
}

export default Nav