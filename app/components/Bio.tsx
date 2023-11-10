"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import bioHeading from "@/public/bio.png";
import leguiya from "@/public/leguiya-about.png";

const Bio = () => {
    const [artistInfo, setArtistInfo] = useState<{ bio: string; socialMedia: object } | {}>({});

    useEffect(() => {
        fetch("http://localhost:8080/api/artist")
            .then((res) => res.json())
            .then((data) => console.log(data))
    }, [])

    return (
        <div id="bio">
            <Image src={bioHeading} alt="bio heading" width={375} height={375} priority />
            <div>
                <p>{(artistInfo as { bio: string; socialMedia: object }).bio}</p>
                <Image src={leguiya} alt="photo of leguiya" priority />
            </div>
        </div>
    )
}

export default Bio;
