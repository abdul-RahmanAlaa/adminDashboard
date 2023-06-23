import { Component } from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent {
  movie1 = {
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
  };
  movie2 = {
    id: 2,
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
  };
  movie3 = {
    id: 3,
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
  };
  movie4 = {
    id: 4,
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
  };
  movie5 = {
    id: 5,
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
  };

  movies: Array<object> = [
    this.movie1,
    this.movie2,
    this.movie3,
    this.movie4,
    this.movie5,
  ];
}
