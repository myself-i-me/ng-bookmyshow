import { Component, Input } from '@angular/core';
import MovieData from "../../data/movie_list_data.json";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  imports: [CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  constructor(private router: Router){}

  moviesList = MovieData;
  @Input() languages! : string[];

  gotoDetails(id:string) {
    this.router.navigate(['/details',id])
  }
}
