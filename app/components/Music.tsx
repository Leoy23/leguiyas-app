import Image from "next/image";
import musicHeading from "@/public/music.png";

const Music = () => {
    return (
        <div id="music" className="text-center w-1/2 h-1/2 lg:w-2/4">
            <Image src={musicHeading} alt="music heading" width={375} height={375} priority />
            <h1>This is the music section.</h1>
        </div>
    )
}

export default Music;
