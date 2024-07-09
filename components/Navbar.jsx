"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdLogIn } from "react-icons/io";
import logo from "../assets/images/logo.png";
import Image from "next/image";
import axios from "axios";
const Navbar = () => {

  const [nav, setNav] = useState(false);

  return (
    <header className="sticky top-0 h-[100px] z-50 bg-[#172554] text-white">
      <nav className="max-w-[1300px] mx-auto h-full flex items-center">
        <div className="w-3/5 px-3 flex lg:gap-10 gap-5 max-md:gap-4 relative">
          <Image src={logo} width={120} height={30} alt="logo" />
          <Link href='/' className="links">Home</Link> 
          <Link href="/movie" className="links">
            Movies
          </Link>
          <Link href="/about" className="links">
            TV Shows
          </Link>
          <Link href="/contact" className="links">
            People
          </Link>
          <Link href="/" className="links">
            More
          </Link>
        </div>
        <div className="w-2/5  h-[100px] flex gap-2 justify-end items-center ">


          <div className=" ml-10 z-50">
            <button
              className="cursor-pointer hidden max-sm:block"
              onClick={() => setNav(!nav)}
            >
              <CiMenuBurger
                className={
                  nav ? "w-[40px] h-[40px] text-white" : "w-[40px] h-[40px]"
                }
              />
            </button>
          </div>
        </div>
        <div className={nav ? "side right-0 tran" : " side tran not-active"}>
            <Link href='/'>Home</Link> 
          <Link href="/movie" >
            Movies
          </Link>
          <Link href="/about" >
            TV Shows
          </Link>
          <Link href="/contact" >
            People
          </Link>
          <Link href="/" >
            More
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
