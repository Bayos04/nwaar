interface Song {
  id: number;
  title: string;
  artist: Artist;
  size: number;
  path: string;
  genre: string;
  releaseDate: Date;
  uploadDate: Date;
  album: Album;
  track: number;
  length: string;
}
