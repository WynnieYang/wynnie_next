import React from 'react';

type VideoPlayerProps = {
    width: number | string;
    source: string;
}

function VideoPlayer({ width, source } :VideoPlayerProps ) {
  return (
    <video width={width} controls className='rounded-lg absolute top-[16%]'>
        <source src={`${process.env.NODE_ENV === 'production' ? '/wynnie_next' : ''}${source}`} type="video/mp4" />
        您的浏览器不支持 HTML5 视频标签。
    </video>
  )
}

export default VideoPlayer