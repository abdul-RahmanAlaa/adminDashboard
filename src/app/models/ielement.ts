export interface IElement {
  id: string;
  name: string;
  type: 'Series' | 'Movies';
  releaseDate: Date;
  genres: { id: number; name: string }[];
  description: string;
  image: string;
  status: string;
  subtitles: number;
  dubbing: number;
  rate: number;
}
