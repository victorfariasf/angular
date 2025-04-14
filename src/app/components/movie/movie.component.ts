import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Movie } from 'src/app/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.sass']
})
export class MovieComponent implements OnInit {
  
  @Input() movie!: Movie;

  constructor() { }

  ngOnInit(): void {
  }

  getPosterUrl(movieName: string): string{
    return `assets/${movieName.toLowerCase().replace(/\s+/g, '')}.jpg`;
  }

  onImageError(event: Event): void{
    const img = event.target as HTMLImageElement;
    img.src = 'assets/poster-not-found.jpg'
  }
}
