export interface IElement {
  id: number;
  title: string;
  imgSrc: string;
  type: string;
  rDate: number;
  status: number;
  failed?: number;
  rushed?: number;
  nVideos?: number;
  audio?: number;
  subtitles?: number;
  dub?: number;
  ad?: number;
  fn?: number;
  cc?: number;
}
