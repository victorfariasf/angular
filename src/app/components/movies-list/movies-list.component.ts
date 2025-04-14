import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.sass']
})
export class MoviesListComponent implements OnInit {

  selectedMovies: Movie[] = [
  ]

  moviePosters = [
    'Avengers',
    'Coraline',
    'Drive',
    'Estranho mundo de jack',
    'Man of steel',
    'Somewhere in past',
    'Spider Man'
  ]

  newMovie: Movie = {
    name: "",
  }

  constructor() { }

  ngOnInit(): void {
  }

  addNewMovie(): void{
    const genericMovie = { ...this.newMovie };
    this.selectedMovies.push(genericMovie);

    this.newMovie = {
      name: ""
    }
  }
}
