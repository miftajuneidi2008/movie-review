
import { popular } from "@/components/data/data";
import Form from "@/components/form/Form";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SignupPage = async () => {
  const data = await popular();
  const datas = data.results;
  const movie = datas[Math.floor(Math.random() * datas.length)];
  return (
    <section className="w-full h-[calc(100vh-100px)]">  
      <div className="relative w-full h-full">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
          width={600}
          height={600}
          className="w-full h-full"
        />
        <div className="absolute top-0 w-full h-full bg-black/60"></div>
        <div className="absolute top-0 w-full h-full flex justify-center items-center text-white">
            <div className="w-full">
            <div className="max-w-[500px] mx-auto max-h-[400px] bg-black/75 px-10 py-8">
              <Form />
            </div>
            </div>

        </div>
      </div>

    </section>
  );
};

export default SignupPage;
