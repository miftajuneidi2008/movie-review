import { popular } from "@/components/data/data";
import LoginForm from "@/components/lForm/LoginForm";
import { Button } from "@/components/ui/button";
import { Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = async () => {
  const data = await popular();
  const movies = data.results;
  const movie = movies[Math.floor(Math.random() * movies.length)];
  return (
    <section className=" w-full h-[calc(100vh-100px)]">
        <div className="relative w-full h-full">
      <Image
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={movie?.title}
        width={600}
        height={600}
        className="w-full h-full"
      />
      <div className="absolute top-0 w-full h-full bg-black/60"></div>
      <div className="absolute w-full h-full top-0 text-white flex justify-center items-center">
        <div className="w-full text-white">
            <div className="max-w-[500px] mx-auto max-h-[400px] bg-black/75 px-10 py-8">
             <LoginForm />
            </div>
        </div>
      </div>
      </div>

    </section>
  );
};

export default LoginPage;
