"use client"
import React from 'react'
import { redirect } from 'next/navigation';
import { UserAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const FavoriteList = () => {
 const {user} = UserAuth()
 const router = useRouter()
 if(!user)
 {
  router.push('/login')
 }
  return (
    <div>
      <p>hello </p>
    </div>
  )
}

export default FavoriteList
