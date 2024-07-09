
import React from 'react'
import Latest from '@/components/latest/Latest'
import Hero from '@/components/Hero/Hero'
import { popular } from '@/components/data/data'

const page = async () => {
  const data =await  popular()
  return (
    <>
    <Hero datas = {data.results}/>
      <Latest /> 
    </>
  )
}

export default page
