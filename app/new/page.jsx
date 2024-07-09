"use client"
import { popular } from '@/components/data/data'
import React, { useEffect, useState } from 'react'
const key='aaab5bc040d37da67980854ff1f22c60'
const New = () => {
    const [data,setData] = useState([])
    console.log("new",data)
    useEffect(()=>
    {
        async function FetchData()
        {
            const data =await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`)
            const nedata = await data.json()
            setData(nedata.results)
        }
        FetchData()
    },[])
  return (
    <div>
      <h1>This is new</h1>
    </div>
  )
}

export default New
