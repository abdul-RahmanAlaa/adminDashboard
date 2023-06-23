import { Injectable } from '@angular/core';
import { IMovie } from '../models/imovie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  moviesList: IMovie[];

  constructor() {
    this.moviesList = [
      {
        id: 1,
        title: 'The Witcher: Nightmare of the Wolf',
        type: 'Movie',
        rDate: 2021,
        fix: 2,
        failed: 38,
        rushed: 3,
        nVideos: 11,
        audio: 30,
        subtitles: 33,
        dub: 70,
        ad: 0,
        fn: 0,
        cc: 0,
      },
    ];
  }
}
