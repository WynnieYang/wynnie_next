'use client'

import React, { useEffect, useRef } from 'react'
import '@dotlottie/player-component';

function Loading() {
    const container = useRef(null); 

    // useEffect(() => {
    //     lottie.loadAnimation({
    //       animationData: require("../lottiefiles/gallery_loading.json"),
    //       autoplay: true,
    //       container: container.current!,
    //       loop: true,
    //       renderer: "svg",
    //     })
    //   }, [])

  return (
    // <div className='w-auto h-auto'><div ref={container} style={{marginTop:'0px',maxHeight:'300px'}} id="animation-container"></div></div>
    // <dotlottie-player
    //     src="https://lottie.host/769e08ce-511a-4ffc-a6f1-74e33eed73b7/hxdcWritW6.json"
    //     autoplay
    //     loop
    //     style={{ height: '100%', width: '100%' }}
    //   />
    <iframe style={{ height: '100%', width: '100%' }} src="https://lottie.host/embed/769e08ce-511a-4ffc-a6f1-74e33eed73b7/hxdcWritW6.json"></iframe>
  )
}

export default Loading