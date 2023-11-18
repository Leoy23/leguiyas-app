import Image from "next/image";
import videoHeading from "@/public/videos.png";
import VideoSquare from "./VideoSquare";

const Videos = () => {
  return (
    <section id="videos" className="text-center mt-8">
      <Image src={videoHeading} alt="video heading" priority />
      <div className="flex flex-col items-center gap-3">
        <section className="bg-gradient-to-r from-darkPink via-darkerPink to-black w-3/4 h-36 mx-10 flex rounded-xl justify-evenly items-center">
          <VideoSquare />
          <VideoSquare />
          <VideoSquare />
        </section>
        <section className="bg-gradient-to-r from-darkPink via-darkerPink to-black w-3/4 h-36 mx-10 flex justify-evenly rounded-xl items-center">
          <VideoSquare />
          <VideoSquare />
          <VideoSquare />
        </section>
        <section className="bg-gradient-to-r from-darkPink via-darkerPink to-black w-3/4 h-36 mx-10 flex justify-evenly items-center rounded-xl">
          <VideoSquare />
          <VideoSquare />
          <VideoSquare />
        </section>
      </div>
    </section>
  );
};

export default Videos;
