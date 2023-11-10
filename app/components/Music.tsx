import Image from "next/image";
import musicHeading from "@/public/music.png";

const Music = () => {
    return (
        <div id="music">
            <Image src={musicHeading} alt="music heading" width={375} height={375} priority />
            <h1>This is the music section.</h1>
        </div>
    )
}

export default Music;
