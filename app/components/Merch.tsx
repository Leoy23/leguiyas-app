import Image from "next/image";
import merchHeading from "@/public/merch.png";

const Merch = () => {
    return (
        <div id="merch">
            <Image src={merchHeading} alt="merch heading" width={375} height={375} priority />
            <h1>This is the merch section.</h1>
        </div>
    )
}

export default Merch;
