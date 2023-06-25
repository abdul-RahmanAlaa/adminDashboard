import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/imovie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent implements OnInit {
  movies: IMovie[] = [];

  constructor(private moviesService: MoviesService) {}
  ngOnInit(): void {
    this.movies = this.moviesService.movies;
  }

  // search: string = '';
}
