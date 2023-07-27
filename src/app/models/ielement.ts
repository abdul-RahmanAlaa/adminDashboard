export interface IElement {
  id: string;
  name: string;
  type: 'Series' | 'Movies';
  // releaseDate: Date;
  Genres: { id: number; name: string }[];
  description: string;
  link: string;
  rate: number;
}
