import { Injectable } from '@angular/core';
import { IElement } from '../models/ielement';

@Injectable({
  providedIn: 'root',
})
export class ElementsService {
  element: IElement[];

  constructor() {
    this.element = [
      {
        id: 81461540,
        title: 'Copycat Killer: Season 1',
        imgSrc: '../../../assets/images/CopycatKiller.jpg',
        type: 'Series',
        rDate: 2023,
        status: 2,
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
      {
        id: 81397078,
        title: 'FUBAR: Season 1',
        imgSrc: '../../../assets/images/fubar.jpg',
        type: 'Series',
        rDate: 0,
        status: 0,
        failed: 44,
        rushed: 0,
        nVideos: 8,
        audio: 24,
        subtitles: 3,
        dub: 90,
        ad: 4,
        fn: 8,
        cc: 0,
      },
      {
        id: 81444818,
        title: 'The Pale Blue Eye',
        imgSrc: '../../../assets/images/ThePaleBlueEye.jpg',
        type: 'Standalone',
        rDate: 2022,
        status: 0,
        failed: 18,
        rushed: 0,
        nVideos: 1,
        audio: 14,
        subtitles: 36,
        dub: 32,
        ad: 7,
        fn: 7,
        cc: 10,
      },
      {
        id: 1,
        title: 'The Witcher: Nightmare of the Wolf',
        imgSrc: '../../../assets/images/The Witcher-Nightmare of the Wolf.jpg',
        type: 'Movie',
        rDate: 2021,
        status: 2,
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
