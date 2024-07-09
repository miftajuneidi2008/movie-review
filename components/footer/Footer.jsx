import React from 'react'
import logo from "../../assets/images/logo.png";

import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className='w-full bg-[#172554]'>
      <div className='max-w-[1300px] mx-auto py-3 px-2 flex gap-3 justify-between max-sm:flex-col text-white max-sm:ml-[60px]'>
      <div className='flex items-center'>
        <Image src={logo} width={200} height={200} alt='Logo' />
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='md:text-2xl text-xl font-bold uppercase'>The basics</h2>
        <Link href="/about">About TMDB</Link>
        <Link href="/about">Contact Us</Link>
        <Link href="/about">Support Forum</Link>
        <Link href="/about">API</Link>
        <Link href="/about">System Status Forum</Link>
      </div>

      

      <div className='flex flex-col gap-2 '>
        <h2 className='md:text-2xl text-xl font-bold uppercase'>community</h2>
        <Link href="/about">Guidelines</Link>
        <Link href="/about">Discussions</Link>
        <Link href="/about">Leaderboard</Link>
      </div>

      <div className='flex flex-col gap-2 '>
        <h2 className='md:text-2xl text-xl font-bold uppercase'>LEGAL</h2>
        <Link href="/about">Terms of Use</Link>
        <Link href="/about">API Terms of Use</Link>
        <Link href="/about">Privacy Policy</Link>
      </div>
      </div>
    </footer>
  )
}

export default Footer
