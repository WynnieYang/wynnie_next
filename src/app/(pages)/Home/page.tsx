import Image from 'next/image';
import VideoPlayer from '@/components/VideoPlayer';
import Card from '@/components/Card';
import { Suspense } from 'react';
import Loading from '@/components/Loading';

function page() {

  return (
    //專案清單
    <Suspense fallback={<Loading/>}>
      <div className='w-full h-full pl-12 py-4 overflow-y-auto'>
        <div className='h-12 '><span className='text-bold text-xl text-E0E1DD font-bold'>Develop</span></div>
        <div className='flex flex-row flex-wrap'>
          <Card type='develop'/>
        </div>
        {/* <div className='h-12'><span className='text-bold text-xl text-slate-600'>Maintain</span></div>
          <Card type='maintain'/> */}
        <div className='h-12'><span className='text-bold text-xl text-E0E1DD font-bold'>Side Project</span></div>
        <div className='flex flex-row flex-wrap'>
          <Card type='sideproject'/>
        </div>
        {/* <VideoPlayer width={'80%'} source='/videos/test_video.mov'/> */}
      </div>
      
    </Suspense>
  )
}

export default page