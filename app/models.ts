export type NavLinks = string[];

export interface BioInfo {
  bio: string;
  socialMedia: object;
}

export interface SongInfo {
  songOne: {
    songTitle: string;
    songLink: string;
  };
  songTwo: {
    songTitle: string;
    songLink: string;
  };
}
