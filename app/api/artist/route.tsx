import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
    return Response.json([{
        bio: "Leguiya is a multifaceted Creative residing in Hollywood, CA. She is a master of all trades and uses her powerful vocals to captivate audiences and leave them encoring for more.",
        socialMedia: {
            tiktok: "https://www.tiktok.com/@leguiya",
            instagram: "https://www.instagram.com/leguiya/",
            facebook: "",
            spotify: "",
            appleMusic: "",
            patreon: "",
            youtube: "",
        },
        music: {
            song1: {
                songTitle: "",
                songLink: "",
            },
            song2: {
                songTitle: "",
                songLink: "",
            },
            song3: {
                songTitle: "",
                songLink: "",
            },
        },
        videos: {
            videoLinkOne: {
                link: "https://www.tiktok.com/@leguiya/video/7295530919685934379?is_from_webapp=1&sender_device=pc&web_id=7289546051740288554",
                source: "TikTok",
            },
            videoLinkTwo: {
                link: "https://www.tiktok.com/@leguiya/video/7289532753564093742?is_from_webapp=1&sender_device=pc&web_id=7289546051740288554",
                source: "TikTok",
            },
            videoLinkThree: {
                link: "https://www.tiktok.com/@leguiya/video/7039220228751936815?is_from_webapp=1&sender_device=pc&web_id=7289546051740288554",
                source: "TikTok",
            },
            videoLinkFour: {
                link: "https://www.instagram.com/reel/CnP6uc-KCPQ/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
                source: "Instagram",
            },
            videoLinkFive: {
                link: "https://www.instagram.com/reel/CmuwncPI0Ft/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
                source: "Instagram",
            },
            videoLinkSix: {
                link: "https://www.instagram.com/reel/CxNCSmwO0BO/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
                source: "Instagram",
            }
        }
    }])
}