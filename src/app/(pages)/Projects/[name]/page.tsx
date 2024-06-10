import VideoPlayer from "@/components/VideoPlayer";
import Image from "next/image";
import React from "react";
import { RiLoginCircleFill } from "react-icons/ri";

export async function generateStaticParams() {
    const namesArray = ['wms', 'md', 'dcm','5ges','tiac','igp','climb','dispatch'];

  // Return an array of objects, each containing a params key
  return namesArray.map((nameList) => ({
      name: nameList,
    }))
  }

export default function Page({ params }: { params: { name: string } }) {
    return (params.name === 'dispatch' || params.name === 'dcm'  ?
    <div className="w-full h-full flex items-start justify-center bg-[#778DA9]" style={{ backgroundImage: `url(${process.env.NODE_ENV === 'production' ? '/wynnie_next' : ''}/images/tv_bg.avif)`, backgroundSize:'85%', backgroundRepeat:'no-repeat', backgroundPositionX: '50%'}}>
      <VideoPlayer width={ params.name === 'dispatch' ? '65%' : '62%'} source={ params.name === 'dispatch' ? '/videos/dispatcher_improve.mp4' : '/videos/dcm_demo.mov'}/>
    </div>
    : params.name === 'climb' ? 
    <div className="w-full h-full grow flex flex-row items-center justify-center px-12" >
      <div className={`flex-[3_3_0%] flex items-center justify-center p-4 bg-E0E1DD rounded-2xl my-2 mx-12 flex-row`}>
          <Image className="rounded-lg mx-8" src={`${process.env.NODE_ENV === 'production' ? '/wynnie_next' : ''}/images/${params.name}_1.avif`} width={280} height={560} alt={`${params.name}_1.avif`} unoptimized/>
          <div className="h-full flex items-center justify-center"><RiLoginCircleFill size={28} className="text-415A77"/></div>
          <Image className="rounded-lg mx-8" src={`${process.env.NODE_ENV === 'production' ? '/wynnie_next' : ''}/images/${params.name}_2.avif`} width={280} height={560} alt={`${params.name}_2.avif`} unoptimized/>
      </div>
      <div className={`flex-[2_2_0%] h-2/5 bg-E0E1DD rounded-2xl shadow-md flex items-start justify-start flex-col`}>
        <div className="p-4"><span className="text-black text-lg">登入頁/首頁</span></div>
        <div className="border-t w-full border-slate-400 grow flex items-start justify-between flex-col">
          <div className="p-4"><span className="text-black break-words whitespace-normal leading-6">此專案嘗試使用React Native實現，前期克服許多建置上的挑戰。<br/>想透過這個專案簡單記錄自己登山的經驗，目前實現登入畫面及嵌入Google Map視覺化首頁，未來規劃能加入自己登山里程及心律等數據，正持續優化中。</span></div>
          <div className="w-full flex items-end justify-end"><Image src={`${process.env.NODE_ENV === 'production' ? '/wynnie_next' : ''}/images/${params.name}ing_1.svg`} width={60} height={80} alt={`${params.name}ing_1.svg`} unoptimized/></div>
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