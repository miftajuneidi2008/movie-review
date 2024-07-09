import React from "react";
import img from "../../assets/images/ba.png";
import Image from "next/image";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";

const Trending = async ({ datas }) => {
  /*const res =await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
 .then(response => response.json())
 .then(response => console.log(response))
 .catch(err => console.error(err));*/
  const movie = [datas];
  

  return datas.map((data, index) => (
    <Link key={index} href={`/mdetails/${data?.id}`}>
      <Card className="relative flex flex-col gap-2 w-[350px] h-[250px] border-0 hover:opacity-50 cursor-pointer transition ease-in-out delay-200">
        <CardContent>
        <Image
        src={`https://image.tmdb.org/t/p/w500/${data?.backdrop_path}`}
        width={500}
        height={300}
        alt={datas?.title}
        className="w-full h-full object-cover hover"
      />
      <p className="text-center font-bold">{data?.title}</p>
        </CardContent>
      </Card>
  
    </Link>
  ));
};

export default Trending;
