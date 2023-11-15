import Image from "next/image";
import Link from "next/link";
import videoHeading from "@/public/videos.png";
import { AiFillPlayCircle } from "react-icons/ai";

const Videos = () => {
  return (
    <section id="videos" className="text-center mt-8">
      <Image src={videoHeading} alt="video heading" priority />
      <div className="flex flex-col items-center gap-3">
        <section className="bg-gradient-to-r from-darkPink via-darkerPink to-black w-3/4 h-32 mx-10 flex justify-evenly items-center shadow-md">
          <Link
            href={"/"}
            className="border-2 border-white p-4 hover:bg-white hover:border-darkerPink"
          >
            <AiFillPlayCircle className="text-white md:w-20 hover:text-darkPink md:h-20" />
          </Link>
          <Link
            href={"/"}
            className="border-2 border-white p-4 hover:bg-white hover:border-darkerPink"
          >
            <AiFillPlayCircle className="text-white  md:w-20 hover:text-darkPink md:h-20" />
          </Link>
          <Link
            href={"/"}
            className="border-2 border-white p-4 hover:bg-white hover:border-darkerPink"
          >
            <AiFillPlayCircle className="text-white md:w-20 hover:text-darkPink md:h-20" />
          </Link>
        </section>
        <section className="bg-gradient-to-r from-darkPink via-darkerPink to-black w-3/4 h-32 mx-10 flex justify-evenly items-center">
          <Link
            href={"/"}
            className="border-2 border-white p-4 hover:bg-white hover:border-darkerPink"
          >
            <AiFillPlayCircle className="text-white md:w-20 hover:text-darkPink md:h-20" />
          </Link>
          <Link
            href={"/"}
            className="border-2 border-white p-4 hover:bg-white hover:border-darkerPink"
          >
            <AiFillPlayCircle className="text-white md:w-20 hover:text-darkPink md:h-20" />
          </Link>
          <Link
            href={"/"}
            className="border-2 border-white p-4 hover:bg-white hover:border-darkerPink"
          >
            <AiFillPlayCircle className="text-white md:w-20 hover:text-darkPink md:h-20" />
          </Link>
        </section>
        <section className="bg-gradient-to-r from-darkPink via-darkerPink to-black w-3/4 h-32 mx-10 flex justify-evenly items-center">
          <Link
            href={"/"}
            className="border-2 border-white p-4 hover:bg-white hover:border-darkerPink"
          >
            <AiFillPlayCircle className="text-white md:w-20 hover:text-darkPink md:h-20" />
          </Link>
          <Link
            href={"/"}
            className="border-2 border-white p-4 hover:bg-white hover:border-darkerPink"
          >
            <AiFillPlayCircle className="text-white md:w-20 hover:text-darkPink md:h-20" />
          </Link>
          <Link
            href={"/"}
            className="border-2 border-white p-4 hover:bg-white hover:border-darkerPink"
          >
            <AiFillPlayCircle className="text-white md:w-20 hover:text-darkPink md:h-20" />
          </Link>
        </section>
      </div>
    </section>
  );
};

export default Videos;
