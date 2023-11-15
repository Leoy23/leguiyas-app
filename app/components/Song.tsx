import Image from "next/image";
import Link from "next/link";
import albumCover from "@/public/mock-album.png";

const Song = () => {
  return (
    <section className="flex flex-col sm:flex-row-reverse sm:items-center sm:justify-evenly w-full md:px-12">
      <div className="mx-10 md:mx-0">
        <Image
          src={albumCover}
          alt="leguiya's mock album cover"
          className="lg:w-96"
        />
      </div>
      <section className="text-center flex flex-col gap-2 mt-2 w-full md:w-2/4">
        <h3 className="text-xs md:text-lg lg:text-xl font-semibold sublevel-heading">
          NEW EP RELEASE
        </h3>
        <div className="mx-10 text-xs">
          <button className="bg-pink p-3 border-2 border-white w-full hover:bg-white hover:text-pink hover:border-pink">
            <Link href={"https://music.apple.com/us/browse"}>APPLE MUSIC</Link>
          </button>
          <div className="flex w-full gap-2 md:gap-8 mt-8">
            <button className="bg-pink p-3 border-2 border-white w-3/4 hover:bg-white hover:text-pink hover:border-pink">
              <Link href={"https://soundcloud.com/"}>SOUNDCLOUD</Link>
            </button>
            <button className="bg-pink p-3 border-2 border-white w-3/4 hover:bg-white hover:text-pink hover:border-pink">
              <Link href={"https://open.spotify.com/"}>SPOTIFY</Link>
            </button>
          </div>
          <button className="bg-pink p-3 border-2 border-white w-full mt-6 hover:bg-white hover:text-pink hover:border-pink">
            <Link href={"https://genius.com/"}>LYRICS</Link>
          </button>
        </div>
      </section>
    </section>
  );
};

export default Song;
