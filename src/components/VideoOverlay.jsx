import React, { useRef } from "react";

const VideoOverlay = ({ videoSrc, imageSrc,logoSrc }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play(); // Play the video on hover
  };

  const handleMouseLeave = () => {
    videoRef.current.pause(); 
    videoRef.current.currentTime = 0; 
  };

  return (
    <div
      className=" w-[85%]   md:w-[33%] relative flex-shrink-0 group mr-2 lg:mr-0 mb-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        muted
        loop
        src={videoSrc}
        className="w-full h-full object-cover object-center"
      />
      <img
        src={imageSrc}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-800 ease-in-out group-hover:opacity-0"
      />
      <img src={logoSrc} alt="" className=" absolute bottom-10 left-1/2 -translate-x-1/2 w-1/3 h-1/5 object-contain"/>
    </div>
  );
};

export default VideoOverlay;
