import Image from "next/image";
import Link from "next/link";
import albumCover from "@/public/mock-album.png";


const Song = () => {
    return (
        <div>
            <div>
                <Image src={albumCover} alt="leguiya's mock album cover" />
            </div>
            <section className="song-menu-item">
                <h3>NEW EP RELEASE</h3>
                <div>
                    <button>APPLE MUSIC</button>
                    <div>
                        <button>SOUNDCLOUD</button>
                        <button>SPOTIFY</button>
                    </div>
                    <button></button>
                </div>
            </section>
        </div>
    )
}

export default Song;
