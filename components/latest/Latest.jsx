
import React from 'react'
import Trending from '../card/Trending'
import Trailer from '../trailer/Trailer'
import { popular, recent } from '../data/data';

const Latest =async () => {
  const pupular =await  popular();
  const popularM = pupular.results;

  const nowPlaying =await  recent();
  const playing = nowPlaying.results;
 
  return (
    <div className='max-w-[1300px] mx-auto mt-6'>
    <div className='flex items-center gap-10'>
     <h1 className='text-xl font-bold'>Trending</h1>
   
    </div>
    <div className='mt-4 flex gap-1'>
     <div className='flex gap-2 overflow-x-scroll whitespace-nowrap flex-nowrap w-[95%]  scrollbar-none'>
       <Trending  datas = {playing} />
       </div>
       <div className='w-[5%]'>

       </div>
     </div>
     <div className='flex items-center gap-10'>
     <h1 className='text-xl font-bold'>What's Popular</h1>
   
    </div>
    <div className='mt-4 flex gap-1'>
     <div className='flex gap-2 overflow-x-scroll whitespace-nowrap flex-nowrap w-[95%]  scrollbar-none'>
     <Trending  datas = {popularM} />
       </div>
       <div className='w-[5%]'>

       </div>
     </div>
   </div>
  )
}

export default Latest
