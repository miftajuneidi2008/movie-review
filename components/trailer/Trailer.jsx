
import React from "react";
import img from "../../assets/images/ima.png";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const Trailer = ({data}) => {
  const movie  = data
  console.log(movie)
  return (
    movie.map((datas)=>(
    <Link className="mt-4 " key={datas.id} href={`/mdetails/${datas.id}`} >
      <Card className="border-0 h-[60%] max-w-[350px] mt-10 relative" >
        <CardContent className="relative">
        <Image src={`https://image.tmdb.org/t/p/w500/${datas?.backdrop_path}`}height={300} width={400} alt="Image" className="w-[330px] h-[200px] object-cover" />
        <p className="text-slate-500 font-semibold">{datas.title}</p>
        <div className="absolute left-6 bottom-12 right-6 inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
    <p className="font-bold">{datas?.original_title}</p></div>
        </CardContent>
        
      </Card>
    </Link>
    ))
  );

};

export default Trailer;
