import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";


const Hero =async ({datas}) => {

 const movie = datas[Math.floor(Math.random()* datas.length)]
 const truncateString = (str,num)=>
  {
    if(str?.length>num)
      {
        return str.slice(str,num)+'...'
      }
      else{
        return str;
      }
  }
  return (
    <section className="w-full h-[550px] text-white ">
      <div className="relative w-full h-full mb-4">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <Image src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} width={600} height={600} className="w-full h-[550px]"/>
        <div className="absolute flex flex-col gap-4 top-[20%] w-full p-4 md:p-8">
          <div className="my-4 flex gap-3">
           <Button className="bg-white text-black hover:text-white hover:border-2 border-white px-6 py-1"><Link href={`/video/${movie.id}`}>Play</Link></Button>
           <Button variant="outline">Watch Later</Button>
          </div>
          <p>Released: {movie?.release_date}</p>
          <p className="md:max-w-[70%] lg:max-w-[50] xl:max-w-[40%]">{truncateString(movie?.overview,150)}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
