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
        <div id="bio" className="flex flex-col justify-center static">
            <div className="flex justify-center">
                <Image src={bioHeading} alt="bio heading" className="w-1/2 h-1/2 lg:w-2/4" priority />
            </div>
            <div className="static flex flex-col-reverse items-center md:flex-row md:p-12 md:z-20">
                <div className="mx-10 md:text-lg">
                    <p>{(artistInfo as { bio: string; socialMedia: object }).bio ? (artistInfo as { bio: string; socialMedia: object }).bio : "Loading..."}</p>
                </div>
                <Image src={leguiya} alt="photo of leguiya" priority className="w-2/4" />
            </div>
        </div>
    )
}

export default Bio;
