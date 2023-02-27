import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SongService {
  allSongs: Array<any> = [];
  constructor() {}

  getAllSongs() {
    return [
      {
        id: 1,
        title: "The Sound",
        artist: { id: 1, name: "Stray Kids" },
        genre: "K-Pop",
        track: 1,
        path: "",
        length: "",
        releaseDate: new Date(),
        size: 3015,
        uploadDate: new Date(),
        album: {
          id: 1,
          name: "THE SOUND",
          artist: { id: 1, name: "Stray Kids" },
          cover: "assets/images/covers/skz-ths.jpg",
          releaseDate: new Date(),
        },
      },
      {
        id: 2,
        title: "Elle pleut",
        artist: { id: 2, name: "Nekfeu" },
        genre: "Rap Fr",
        track: 9,
        path: "",
        length: "",
        releaseDate: new Date(),
        size: 3015,
        uploadDate: new Date(),
        album: {
          id: 2,
          name: "Les étoiles Vagabondes",
          artist: { id: 2, name: "Nekfeu" },
          cover: "assets/images/covers/nekfeu-lev.jpeg",
          releaseDate: new Date(),
        },
      },
      {
        id: 3,
        title: "Feu de bois",
        artist: { id: 3, name: "Damso" },
        genre: "Rap Fr",
        track: 6,
        path: "",
        length: "",
        releaseDate: new Date(),
        size: 3015,
        uploadDate: new Date(),
        album: {
          id: 3,
          name: "Lithopédion",
          artist: { id: 3, name: "Damso" },
          cover: "assets/images/covers/damso-lit.jpg",
          releaseDate: new Date(),
        },
      },
      {
        id: 4,
        title: "Black Swan",
        artist: { id: 4, name: "BTS" },
        genre: "K-Pop",
        track: 7,
        path: "",
        length: "",
        releaseDate: new Date(),
        size: 3045,
        uploadDate: new Date(),
        album: {
          id: 4,
          name: "Map Of The Soul 7",
          artist: { id: 4, name: "BTS" },
          cover: "assets/images/covers/bts-mots7.png",
          releaseDate: new Date(),
        },
      },
      {
        id: 5,
        title: "Fake Love",
        artist: { id: 4, name: "BTS" },
        genre: "K-Pop",
        track: 2,
        path: "",
        length: "",
        releaseDate: new Date(),
        size: 3045,
        uploadDate: new Date(),
        album: {
          id: 4,
          name: "Love yourself 'Tear'",
          artist: { id: 4, name: "BTS" },
          cover: "assets/images/covers/bts-lyt.jpg",
          releaseDate: new Date(),
        },
      },
      {
        id: 6,
        title: "Tricheur",
        artist: [
          { id: 2, name: "Nekfeu" },
          { id: 3, name: "Damso" },
        ],
        genre: "Rap Fr",
        track: 12,
        path: "",
        length: "",
        releaseDate: new Date(),
        size: 3015,
        uploadDate: new Date(),
        album: {
          id: 2,
          name: "Les étoiles Vagabondes",
          artist: { id: 2, name: "Nekfeu" },
          cover: "assets/images/covers/nekfeu-lev.jpeg",
          releaseDate: new Date(),
        },
      },
    ];
  }
}
