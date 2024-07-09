"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { UserAuth } from '@/context/AuthContext'
import axios from 'axios'
const LoginForm = () => {
  const router = useRouter()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [loading,setLoading] = useState(false)


  return (
    <>
      <h1 className="text-xl font-bold pt-2 pb-4">Sign In</h1>
            <form className="w-full flex flex-col gap-8">
          <input
          onChange={e=>setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Your Email...."
            className="inputs"
          />
          <input
          onChange={e=>setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Your Password...."
            className="inputs"
          />
          <Button className="bg-rose-500 text-white rounded-md hover:border-[1px] border-rose-50">
            Sign In
          </Button>
        </form>
        <p className="text-slate-400 pt-4">New User? <Link href='/signup' className="text-white font-semibold">Sign Up</Link></p>
    </>
  )
}

export default LoginForm
