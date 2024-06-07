'use client' 

import React, { useEffect } from 'react'
// import { Document, Page, pdfjs } from 'react-pdf';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Document = dynamic(() => import('react-pdf').then(mod => mod.Document), { ssr: false });
const Page = dynamic(() => import('react-pdf').then(mod => mod.Page), { ssr: false });
// import { pdfjs } from 'react-pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

function page() {
    useEffect(() => {
        // 設置 PDF.js Worker 的 URL
        const { pdfjs } = require('react-pdf');
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
      }, []);
   
  return (
    <div className='w-full h-full pl-12 py-4 mb-4 overflow-y-auto flex items-start justify-center'>
        <div className='w-3/5 h-full flex items-start justify-center'>
            {/* <Document file="/intro.pdf" >
                <Page pageNumber={1} />
            </Document> */}
            <Image src={'/images/introduction.jpg'} alt='intro' width={1200} height={800} unoptimized/>
        </div>
    </div>
  )
}

export default page