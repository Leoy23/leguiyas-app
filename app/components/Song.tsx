import Image from "next/image";
import Link from "next/link";
import albumCover from "@/public/mock-album.png";

const Song = () => {
  return (
    <section className="flex flex-col sm:flex-row sm:items-center sm:justify-center w-full">
      <div className="mx-10 sm:mx-0">
        <Image
          src={albumCover}
          alt="leguiya's mock album cover"
          className="sm:w-3/4"
        />
      </div>
      <section className="song-menu-item flex flex-col gap-2 mt-2">
        <h3>NEW EP RELEASE</h3>
        <div className="mx-10 text-xs">
          <button className="bg-pink p-2 border-2 border-white w-full">
            APPLE MUSIC
          </button>
          <div className="flex justify-evenly w-full gap-2 mt-2">
            <button className="bg-pink p-2 border-2 border-white w-3/4">
              SOUNDCLOUD
            </button>
            <button className="bg-pink p-2 border-2 border-white w-3/4">
              SPOTIFY
            </button>
          </div>
          <button className="bg-pink p-2 border-2 border-white w-full mt-2">
            LYRICS
          </button>
        </div>
      </section>
    </section>
  );
};

export default Song;
