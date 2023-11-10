import Image from "next/image";
import videoHeading from "@/public/video.png";

const Videos = () => {
    return (
        <div id="videos">
            <Image src={videoHeading} alt="video heading" width={375} height={375} priority />
            <h1>This is the video section.</h1>
        </div>
    )
}

export default Videos;
