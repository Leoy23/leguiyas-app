import Image from "next/image";
import musicHeading from "@/public/music.png";
import Song from "./Song";
import SongTwo from "./SongTwo";

const Music = () => {
  return (
    <section id="music" className="text-center mt-8 md:px-12">
      <Image src={musicHeading} alt="music heading" priority />
      <Song />
      <SongTwo />
    </section>
  );
};

export default Music;
