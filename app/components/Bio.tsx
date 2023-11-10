import Image from "next/image";
import bioHeading from "@/public/bio.png";

const Bio = () => {
    return (
        <div id="bio">
            <Image src={bioHeading} alt="bio heading" width={375} height={375} priority />
            <h1>This is the bio section.</h1>
        </div>
    )
}

export default Bio;
