import { Injectable } from "@angular/core";
import axios, { AxiosResponse } from "axios";

@Injectable({
  providedIn: "root",
})
export class SongService {
  allSongs: Array<any> = [];
  constructor() {}

  private accessToken: string = "";

  private readonly CLIENT_ID = "f86e8b419ef642b692b93209ae0d2578";
  private readonly REDIRECT_URI = "https://example.com/callback"; // Replace with your own redirect URI
  private readonly API_BASE_URL = "https://api.spotify.com/v1";

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

  // Get an access token using client credentials flow
  async getAccessToken(): Promise<string> {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      {
        grant_type: "client_credentials",
      },
      {
        headers: {
          Authorization: `Basic ${btoa(
            `${this.CLIENT_ID}:<YOUR_CLIENT_SECRET>`
          )}`,
        },
      }
    );

    return response.data.access_token;
  }

  // Get songs from user's library
  async getLibrarySongs(
    accessToken: string,
    offset: number
  ): Promise<AxiosResponse> {
    const response = await axios.get(`${this.API_BASE_URL}/me/tracks`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        limit: 50,
        offset: offset,
      },
    });

    return response;
  }

  // Retrieve all the songs in the user's library
  async getAllLibrarySongs(): Promise<void> {
    this.accessToken = await this.getAccessToken();

    let response = await this.getLibrarySongs(this.accessToken, 0);
    let songs = response.data.items;

    while (response.data.next) {
      response = await axios.get(response.data.next, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      });

      songs = [...songs, ...response.data.items];
      console.log(songs);
    }

    this.allSongs = songs;
    console.log(`Retrieved ${this.allSongs.length} songs from user's library!`);
  }
}
