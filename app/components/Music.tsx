import Image from "next/image";
import musicHeading from "@/public/music.png";
import Song from "./Song";

const Music = () => {
  return (
    <div id="music" className="text-center mt-8">
      <Image src={musicHeading} alt="music heading" priority />
      <Song />
      <Song />
    </div>
  );
};

export default Music;
