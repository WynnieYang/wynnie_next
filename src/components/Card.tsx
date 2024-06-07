'use client'

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsFiletypeScss } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { SiVite } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiGooglemaps } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { MdOutlineTextsms } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

function Card({type}: {type:string}) {
    const [cardList,setCardList] = useState([
        {name: 'Warehouse Management System', id: 'wms', frame: ['React,TS,SCSS,Design'], apiMethods: 'GET/PUT/POST', type: 'develop', href: 'https://wms.super-datafabric.iii-ei-stack.com/PDashboard', description: '此為單獨發想設計畫面的第一份專案，注重整體色調和風格。', isShowDes: false, highlightWord: '設計畫面'},
        // {name: 'MasterData', id: 'md', frame: ['React,TS,SCSS'], apiMethods: 'GET/PUT/POST/DELETE', type: 'develop',isShowDes: false, description: '使用行事曆排程功能。', highlightWord: '排程' },
        {name: 'Dispatcher', id: 'dispatch', frame: ['React,TS,SCSS'], apiMethods: 'GET/PUT/POST/DELETE', type: 'develop',isShowDes: false, description: '實現滾動式渲染並同時偵測滑鼠靜止不動每十秒重新打api。',highlightWord: '滾動式渲染並同時偵測滑鼠靜止不動' },
        // {name: 'MasterData', id: 'md', frame: ['React,TS,SCSS'], apiMethods: 'GET/PUT/POST/DELETE', type: 'develop'},
        {name: 'Document Management', id: 'dcm', frame: ['React,TS,SCSS'], apiMethods: 'GET/PUT/POST/DELETE', type: 'develop', isShowDes: false, description: '使用Konva實現以圖片為背景的繪圖板。', highlightWord: 'canvas'},
        {name: 'III-5GES', id: '5ges', frame: ['React,TS,SCSS,Design,Vite'], apiMethods: 'WEBSOCKET', type: 'develop', href: 'http://60.251.156.213:21080/dashboard', isShowDes: false, description: '以Dashboard視覺化呈現資料，支援Dark/Light Mode切換。', highlightWord: 'Dark/Light'},
        {name: 'IGP', id: 'igp', frame: ['React,TS,SCSS'], apiMethods: 'GET', type: 'develop', href: 'https://igp.super-datafabric.iii-ei-stack.com/PStudio', isShowDes: false, description:'花三日從零開發，以利公司提案。', highlightWord: '三日'},
        // {name: 'TIAC', id: 'tiac', frame: ['NEXT,TS,CSS'], apiMethods: 'GET/POST', type: 'maintain', isShowDes: false, description:'使用App Router架構、RTK。', highlightWord: 'App Router'},
        {name: 'Climbing_app', id: 'climb', frame: ['RN,TS','Map','Design'], apiMethods: '', type: 'sideproject',isShowDes: false, description: '初試React Native並使用Google Map顯示地圖，加入Firebase建置資料庫。', highlightWord: 'React Native'},
        {name: 'Gallery', id: 'gallery', frame: ['NEXT,TS','Tailwind','GithubPage'], apiMethods: '', type: 'sideproject',isShowDes: false, description: '使用App Router架構，Lazy Load Image，部署上版至GitHub Pages。', highlightWord: 'React Native', href: 'https://mafayangphoto.github.io/gallery/event/wedding'},
    ]);
    const descriptionRef = useRef<HTMLDivElement | null>(null);
    const [desWidth,setDesWidth] = useState(0);

    useEffect(() => {
        setDesWidth(descriptionRef?.current?.clientWidth!);
    },[descriptionRef?.current])

    const HighlightText = ({ text, highlight }: { text: string, highlight: string}) => {
        if (!highlight.trim()) {
          return <span className='text-slate-500 text-sm break-words whitespace-normal'>{text}</span>; // 如果沒有提供高亮詞句，直接返回原文本
        }
      
        // 創建正則表達式，用於匹配高亮詞句，忽略大小寫
        const regex = new RegExp(`(${highlight})`, 'gi');
      
        // 使用 split 方法將文本按高亮詞句分割，並創建新數組以包含高亮部分
        const parts = text.split(regex);
      
        return (
          <span className='text-slate-500 text-sm break-words whitespace-normal'>
            {parts.map((part, index) =>
              part.toLowerCase() === highlight.toLowerCase() ? (
                <span key={index} className="bg-yellow-200">
                  {part}
                </span>
              ) : (
                part
              )
            )}
          </span>
        );
      };

  return (
    cardList.filter((ele) => ele.type === type).map((cardItem,cardIndex) => (
        <div key={`${cardItem.id}${cardIndex}`} className='w-[31%] min-w-[280px] min-h-64 h-auto bg-FBFEFB rounded-2xl shadow-md flex items-start justify-start p-8 flex-col mb-8 mr-8'>
            <div className='flex flex-row grow w-full'>
                <div className='min-w-10 h-full'><Image width={30} height={30} src={`/images/${cardItem.id}_logo.svg`} alt={cardItem.id}/></div>
                <div className='grow h-full ml-2 flex items-start justify-start flex-col'>
                    <div className='flex-1 w-full flex items-center justify-between min-h-8 max-h-8'><span className='text-black text-lg'>{cardItem.name}</span></div>
                    <div className='flex-1 w-full flex items-center justify-start flex-row flex-wrap'>
                        { cardItem.frame.map((frame) => 
                            <React.Fragment key={frame}>
                                { frame.includes('React') && <div className='w-fit flex items-center justify-center rounded-xl border px-2 flex-row mr-2 mb-2'><FaReact color='#35799C' size={20}/><span className='text-slate-600 mx-1'>React</span></div> }
                                { frame.includes('RN') && <div className='w-fit flex items-center justify-center rounded-xl border px-2 flex-row mr-2 mb-2'><TbBrandReactNative color='#10A6D4' size={20}/><span className='text-slate-600 mx-1'>React Native</span></div> }
                                { frame.includes('NEXT') && <div className='w-fit flex items-center justify-center rounded-xl border px-2 flex-row mr-2 mb-2'><TbBrandNextjs className='text-slate-600' size={20}/><span className='text-slate-600 mx-1'>Next.js</span></div> }
                                { frame.includes('TS') && <div className='w-fit flex items-center justify-center rounded-xl border px-2 flex-row mr-2 mb-2'><SiTypescript color='#4377C1' size={16}/><span className='text-slate-600 mx-1'>TypeScript</span></div> }
                                { frame.includes('CSS') && ( frame.includes('SCSS') ? <div className='w-fit flex items-center justify-center rounded-xl border px-2 flex-row mr-2 mb-2'><BsFiletypeScss color='#C16A98' size={18}/><span className='text-slate-600 mx-1'>SCSS</span></div> : <div className='w-fit flex items-center justify-center rounded-xl border px-2 flex-row mr-2 mb-2'><FaCss3Alt color='#2C4BDC' size={18}/><span className='text-slate-600 mx-1'>CSS</span></div>) }
                                { frame.includes('Vite') && <div className='w-fit flex items-center justify-center rounded-xl border px-2 flex-row mr-2 mb-2'><SiVite className='text-slate-600' size={16}/><span className='text-slate-600 mx-1'>Vite</span></div> }
                                { frame.includes('Map') && <div className='w-fit flex items-center justify-center rounded-xl border px-2 flex-row mr-2 mb-2'><SiGooglemaps color='#D85140' size={16}/><span className='text-slate-600 mx-1'>Google Map</span></div> }
                                { frame.includes('Firebase') && <div className='w-fit flex items-center justify-center rounded-xl border px-2 flex-row mr-2 mb-2'><IoLogoFirebase className='text-slate-600' size={16}/><span className='text-slate-600 mx-1'>Firebase</span></div> }
                                { frame.includes('Design') && <div className='w-fit flex items-center justify-center rounded-xl border px-2 mr-2 mb-2'><IoMdCheckmarkCircleOutline size={20} color='#619b8a'/><span className='text-black text-base ml-1'>UI/UX</span></div>}
                                { frame.includes('Tailwind') && <div className='w-fit flex items-center justify-center rounded-xl border px-2 mr-2 mb-2'><RiTailwindCssFill size={20} color='#52B3D1'/><span className='text-black text-base ml-1'>Tailwind CSS</span></div>}
                                { frame.includes('GithubPage') && <div className='w-fit flex items-center justify-center rounded-xl border px-2 mr-2 mb-2'><FaGithub size={20} color='#222222'/><span className='text-black text-base ml-1'>GitHub Pages</span></div>}
                            </React.Fragment>
                        )}
                    </div>
                    {/* <div className='flex-1 flex items-center justify-between w-full min-h-6'><div className='flex items-center justify-center '><span className='text-slate-500 text-sm'>{cardItem.apiMethods}</span></div></div> */}
                { cardItem?.description && <div ref={descriptionRef} className='flex-1 flex items-start justify-start w-full min-h-6'>
                {/* <MdOutlineTextsms className='text-slate-500'/> */}
                {/* <span className={`text-slate-500 text-sm break-words whitespace-normal `}>{HighlightText({text: cardItem?.description, highlight: cardItem.highlightWord})}</span></div>} */}
                <span className={`text-slate-500 text-sm break-words whitespace-normal `}>{cardItem?.description}</span></div>}
                    {/* { (cardItem?.description?.length < (desWidth / 20) || cardItem.isShowDes) ? <span className='text-slate-500 text-sm break-words whitespace-normal'>{cardItem?.description}</span>
                     : <div className='flex items-center justify-between w-full'>
                        <div><span className='text-slate-500 text-sm break-words whitespace-normal'>{cardItem?.description.slice(0,(desWidth / 20))}...</span></div>
                        <div className='flex flex-row items-center justify-center cursor-pointer hover:text-black text-slate-500 ' onClick={() => { setCardList(prevList => prevList.map(card => card.id === cardItem.id ? { ...card, isShowDes: true } : { ...card, isShowDes: false } ) ); }}><span className='text-sm'>顯示更多</span><MdKeyboardDoubleArrowDown/></div></div>}  */}
                </div>
            </div>
            {/* <Link className='w-full h-10 bg-D0B8AC text-white hover:bg-EFE5DC hover:text-D0B8AC flex items-center justify-center rounded-xl cursor-pointer' href={`/Projects/${cardItem.id}`}><span className='text-base'>Take a look!</span></Link> */}
            <Link className='w-full h-10 bg-D0B8AC text-white hover:bg-EFE5DC hover:text-D0B8AC flex items-center justify-center rounded-xl cursor-pointer mt-4' target={cardItem.href ? "_blank" : "_self"} href={cardItem.href ? cardItem.href : `/Projects/${cardItem.id}`}><span className='text-base'>Take a look!</span></Link>
        </div>
    ))
   
  )
}

export default Card