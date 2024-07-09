"use client"
import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { FaPlay } from "react-icons/fa";

const Video = ({data}) => {
  const url = data
  return (
    
    <ReactPlayer
          url={`https://www.youtube.com/watch?v=${url}`}
          controls
          width="1500px"
          height="600px"
          light
          playing={true}
          playIcon={<div className="bg-white px-2 py-2 text-red-700 hover:text-rose-500"><FaPlay/></div>}
          className = "w-[100%] h-full"
        />
  );
};

export default Video;
