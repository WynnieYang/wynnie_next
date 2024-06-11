'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Nav() {
    const navList = ['Home', 'Introduction']
  return (
    <div className='ml-12 pr-8 h-12 lg:h-16 items-center justify-between hidden sm:flex border-solid border-b-2 border-415A77'>
        <Link href={'/Home'}><Image className='cursor-pointer' src={`${process.env.NODE_ENV === 'production' ? '/wynnie_next' : ''}/logo.png`} alt='logo' width={40} height={40} priority unoptimized /></Link>
        <div className='flex items-center justify-start flex-row'>
            { navList.map((nav,navIndex) => (
                <Link href={nav === 'Introduction' ? 'https://www.cakeresume.com/s--iqooiggPAm_ICL46VU3z_w--/wynnieyang88' : `/${nav.replace(/\s+/g, '').charAt(0) + nav.replace(/\s+/g, '').toLowerCase().slice(1)}`} key={`${nav}${navIndex}`} className='w-24 flex items-center justify-center'><span className='text-E0E1DD text-lg hover:text-415A77 cursor-pointer'>{nav}</span></Link>
            ))}
        </div>
    </div>
  )
}

export default Nav