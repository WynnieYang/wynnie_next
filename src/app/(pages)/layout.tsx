import React from 'react';
import Image from 'next/image';
import Nav from '@/components/Nav';

export default function Layout({ children }: { children: React.ReactNode }) {
    return(
        <div className='flex flex-col w-screen h-screen'>
            <Nav/>
            <div className='grow' style={{maxHeight: 'calc(100% - 64px)'}}>{children}</div>
        </div>
    )
}