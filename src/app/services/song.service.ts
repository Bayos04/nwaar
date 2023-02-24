import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  allSongs: Array<Song> = [];
  constructor() {}

  getAllSongs() {
    this.allSongs = [
      {
        id: 1,
        title: 'The Sound',
        artist: { id: 1, name: 'Stray Kids' },
        genre: 'K-Pop',
        track: 1,
        path: '',
        length: '',
        releaseDate: new Date(),
        size: 3015,
        uploadDate: new Date(),
        album: {
          id: 1,
          name: 'THE SOUND',
          artist: { id: 1, name: 'Stray Kids' },
          cover: 'assets/images/covers/skz-ths.jpg',
          releaseDate: new Date(),
        },
      },
    ];
  }
}
