import Image from "next/image";
import Link from "next/link";
import albumCover from "@/public/mock-album.png";

const SongTwo = () => {
  return (
    <section className="flex flex-col sm:flex-row sm:items-center md:justify-evenly w-full md:px-12">
      <div className="mx-10 md:mx-2">
        <Image
          src={albumCover}
          alt="leguiya's mock album cover"
          className="lg:w-96"
        />
      </div>
      <section className="text-center flex flex-col gap-2 mt-2 w-full md:w-2/4">
        <h3 className="text-xs xl:text-xl font-semibold sublevel-heading">
          NEW EP RELEASE
        </h3>
        <div className="mx-10 text-xs md:text-sm">
          <button className="bg-pink p-3 border-2 border-white w-full hover:bg-white hover:text-pink hover:border-pink rounded-xl">
            <Link href={"https://music.apple.com/us/browse"}>APPLE MUSIC</Link>
          </button>
          <div className="flex w-full gap-4 md:gap-8 mt-8">
            <button className="bg-pink p-3 border-2 border-white w-3/4 hover:bg-white hover:text-pink hover:border-pink rounded-xl">
              <Link href={"https://soundcloud.com/"}>SOUNDCLOUD</Link>
            </button>
            <button className="bg-pink p-3 border-2 border-white w-3/4 hover:bg-white hover:text-pink hover:border-pink rounded-xl">
              <Link href={"https://open.spotify.com/"}>SPOTIFY</Link>
            </button>
          </div>
          <button className="bg-pink p-3 border-2 border-white w-full mt-8 hover:bg-white hover:text-pink hover:border-pink rounded-xl">
            <Link href={"https://genius.com/"}>LYRICS</Link>
          </button>
        </div>
      </section>
    </section>
  );
};

export default SongTwo;
