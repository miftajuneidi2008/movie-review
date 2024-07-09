import { playing, recent, upcoming } from '@/components/data/data'
import Trailer from '@/components/trailer/Trailer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = async({params}) => {
    const name = params.slug
    var title;
    var data;
    if(name=="now-playing")
        {
            title = "Now Playing"
            data = await playing()
        }

        else if(name=="upcoming")
            {
                title = "Upcoming"
                data = await upcoming()
            }
            else if(name=="top-rated")
            {
                title = "Top Rated"
                data = await recent()
            }
  return (
    <section className='flex gap-4  max-w-[1400px] mx-auto'>
        <div className='w-1/5 flex-flex-col gap-8 mt-8'>

        <h1 className='text-2xl font-bold'>{title}</h1>
        <div className='px-2 py-2 flex flex-col gap-4 shadow-md mt-4'>
            <h2 className='text-xl font-bold'>Sort</h2>
            <div className='flex gap-2'>
            <input type="checkbox" id="vehicle1" name="pDescending" value="Bike"/>
            <p>Popularity Descending</p>
            </div>

            <div className='flex gap-2'>
            <input type="checkbox" id="vehicle1" name="pDescending" value="Bike"/>
            <p>Popularity Ascending</p>
            </div>
            <div className='flex gap-2'>
            <input type="checkbox" id="vehicle1" name="pDescending" value="Bike"/>
            <p>Rating Ascending</p>
            </div>

            <div className='flex gap-2'>
            <input type="checkbox" id="vehicle1" name="pDescending" value="Bike"/>
            <p>Release Date Ascending</p>
            </div>

            <div className='flex gap-2'>
            <input type="checkbox" id="vehicle1" name="pDescending" value="Bike"/>
            <p>Release Date Descending</p>
            </div>

            <Button variant="outline" className="trailer-border hover:bg-rose-500 hover:text-white">Search</Button>

        </div>
        </div>
        <div className=' w-4/5 flex-flex-col gap-1'>
          <div className='flex gap-2 items-center mt-8'>
          <Link href={`/movie`}   className='drop-menus'>Popular</Link>
            <Link href={`/movie/top-rated`}   className='drop-menus'>Top Rated</Link>
            <Link href={`/movie/now-playing`} className='drop-menus'>Now Playing</Link>
            <Link href={`/movie/upcoming`}    className='drop-menus'>Upcoming</Link>
          </div>
        <div className=' grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1'>
           <Trailer data = {data.results}/>
        </div>
        </div>
    </section>
  )
}

export default page
