import Image from "next/image";
import videoHeading from "@/public/videos.png";

const Videos = () => {
    return (
        <div id="videos" className="text-center w-1/2 h-1/2 lg:w-2/4">
            <Image src={videoHeading} alt="video heading" width={375} height={375} priority />
            <h1>This is the video section.</h1>
        </div>
    )
}

export default Videos;
