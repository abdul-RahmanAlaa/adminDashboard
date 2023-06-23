export interface IMovie {
  id: number;
  title: string;
  type: string;
  rDate: number;
  fix: number;
  failed: number;
  rushed: number;
  nVideos: number;
  audio: number;
  subtitles: number;
  dub: number;
  ad: number;
  fn: number;
  cc?: number;
}
