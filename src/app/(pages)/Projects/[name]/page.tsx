import VideoPlayer from "@/components/VideoPlayer";
import Image from "next/image";
import React from "react";

export async function generateStaticParams() {
    const namesArray = ['wms', 'md', 'dcm','5ges','tiac','igp','climb','dispatch'];

  // Return an array of objects, each containing a params key
  return namesArray.map((nameList) => ({
    name: nameList,
  }))
}
 
export default function Page({ params }: { params: { name: string } }) {
    return (params.name === 'dispatch' || params.name === 'dcm'  ?
    <div className="w-full h-full flex items-start justify-center " style={{backgroundImage: 'url(/images/tv_bg.png)', backgroundSize:'85%', backgroundRepeat:'no-repeat', backgroundPositionX: '50%'}}>
      <VideoPlayer width={ params.name === 'dispatch' ? '65%' : '62%'} source={ params.name === 'dispatch' ? '/videos/dispatcher_improve.mp4' : '/videos/dcm_demo.mov'}/>
    </div>
    : params.name === 'climb' ? 
    <div className="w-full h-full grow flex flex-row items-center justify-center px-12" >
      <div className={`flex-[3_3_0%] flex items-center justify-center`}>
        <Image className="rounded-lg mx-8" src={`/images/${params.name}_1.png`} width={300} height={600} alt={`${params.name}_1.png`} unoptimized/>
        <Image className="rounded-lg mx-8" src={`/images/${params.name}_2.png`} width={300} height={600} alt={`${params.name}_2.png`} unoptimized/>
      </div>
      <div className={`flex-[2_2_0%] h-3/5 bg-FBFEFB rounded-2xl shadow-md flex items-start justify-start flex-col`}>
        <div className="p-4"><span className="text-black text-lg">登入頁/首頁</span></div>
        <div className="border-t w-full border-slate-400 grow flex items-start justify-between flex-col">
          <div></div>
          <div className="w-full flex items-end justify-end"><Image src={`/images/${params.name}ing_1.svg`} width={60} height={80} alt={`${params.name}ing_1.svg`} unoptimized/></div>
        </div>
      </div>
    </div>
      // { Array.from({ length: 2 }).map((_, index) => (
      //     <React.Fragment key={index}>
      //       <div className={`flex-1 ml-12 `}><Image className="rounded-lg" src={`/images/${params.name}_${index+1}.png`} width={300} height={600} alt={`${params.name}_${index+1}.png`}/></div>
      //       <div className={`flex-1 mx-8 h-3/5 bg-FBFEFB rounded-2xl shadow-md flex items-start justify-start p-8 flex-col`}>

      //       </div>
      //     </React.Fragment>
      //   ))}
    :
    <div>My Post: {params.name}</div>)
}