"use client"
import React, { useEffect, useState } from 'react'
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Link from 'next/link';
import useSWR from 'swr';
import axios from 'axios';
import Video from '@/components/Video/Video';

const key='aaab5bc040d37da67980854ff1f22c60'
const VideoPage = ({params}) => {
  const [id,setId] = useState(params.id)
  const [loading,setLoading]  = useState(true)
  const [data,setData] = useState([])
  


useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
  .then((res) => res.json())
  .then((data) => {
    setData(data.results[0].key)
  })
setLoading(false)
},[id])
  return (
    loading?(<p>Loading....</p>):
    (<div className='relative min-w-screen h-full bg-slate-400'>
        <div className='relative flex justify-center items-center'>
         
        <Video data = {data} />
        <button
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              border: 'none',
              padding: '5px 10px',
              cursor: 'pointer',
              zIndex: 1,
            }}
           
          >
            <Link href={`/mdetails/${id}`}>
            <IoMdClose className='w-[25px] h-[25px]'/>
            </Link>
          </button>
        </div>
        
        </div>)
  )
}

export default VideoPage
