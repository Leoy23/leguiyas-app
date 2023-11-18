import { AiFillPlayCircle } from "react-icons/ai";
import Link from "next/link";

const VideoSquare = () => {
  return (
    <div className="border-2 border-white px-5 py-5 hover:bg-darkerPink hover:border-darkerPink flex rounded-xl">
      <Link href={"/"}>
        <AiFillPlayCircle className="text-white md:w-20 hover:text-darkPink md:h-20" />
      </Link>
    </div>
  );
};

export default VideoSquare;
