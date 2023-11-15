import Image from "next/image";
import musicHeading from "@/public/music.png";
import Song from "./Song";
import SongTwo from "./SongTwo";

const Music = () => {
  return (
    <div id="music" className="text-center mt-8">
      <Image src={musicHeading} alt="music heading" priority />
      <Song />
      <SongTwo />
    </div>
  );
};

export default Music;
