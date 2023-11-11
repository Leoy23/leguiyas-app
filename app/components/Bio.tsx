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
            .then((data) => setArtistInfo(data))
            .catch((error) => console.log(error))
    }, [])

    return (
        <div id="bio" className="flex flex-col justify-center p-20">
            <div className="flex justify-center">
                <Image src={bioHeading} alt="bio heading" width={375} height={375} priority />
            </div>
            <div className="flex justify-center items-center">
                <div className="mx-10">
                    <p>{(artistInfo as { bio: string; socialMedia: object }).bio ? (artistInfo as { bio: string; socialMedia: object }).bio : "This is where the bio would go!"}</p>
                </div>
                <Image src={leguiya} alt="photo of leguiya" priority className="h-3/4 w-1/4" />
            </div>
        </div>
    )
}

export default Bio;
