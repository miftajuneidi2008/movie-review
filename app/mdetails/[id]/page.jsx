
import Video from '@/components/Video/Video';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaHeart,FaBookmark,FaPlay } from "react-icons/fa";
const MovieDetails = async({params}) => {
  
    const data =await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
    const nedata = await data.json()
    
  
  return (
    <div className='w-full h-[80vh] text-white'>
        <div className='relative w-full h-full mb-4'>
            <div className='absolute w-full h-[80vh]  inset-0 bg-slate-700 opacity-90 '> </div>
            <Image src={`https://image.tmdb.org/t/p/original/${nedata?.backdrop_path}`} alt={nedata?.title} width={600} height={600} className="w-full h-[550px] brightness-10 opacity-100"/>
            <div className="absolute flex max-md:flex-col max-md:min-h-screen gap-4 top-[20%] w-full p-4 md:p-8">
            <Image src={`https://image.tmdb.org/t/p/original/${nedata?.backdrop_path}`} alt={nedata?.title} width={600} height={600} className='h-[70%]'/>
             <div className='flex flex-col gap-5'>
             <p className='text-2xl font-bold'>{nedata?.title} ({nedata?.release_date})</p>
             <div className='flex gap-4'>
              <div className='flex gap-2 items-center'>
                <p>My Favorite</p>
                <Link href={`/favorite/${nedata?.id}`}>
              <FaHeart className='cursor-pointer'/>
              </Link>
              </div>
              <div className='flex gap-2 items-center'>
                <p>Watch List</p>
              <FaBookmark className='cursor-pointer'/>
              </div>
           
              <Link href={`/video/${params.id}`} className='flex items-center'>
                <FaPlay/>
              </Link>
              

             </div>
             <div className='flex flex-col gap-2'>
                <p>Overview</p>
                <p>{nedata.overview}</p>
             </div>
            
             </div>
            </div>

        </div>
      
    </div>
  )
}

export default MovieDetails


