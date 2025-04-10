import { Component } from '@angular/core';
import MovieData from '../../data/movie_list_data.json'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  constructor(private route: ActivatedRoute) {}
  movieId!: string | null;
  movie: any;
  ngOnInit() {
    this.movieId = this.route.snapshot.paramMap.get('id');
    console.log("id",this.movieId)
    this.movie = this.getMovieById(this.movieId);
  }

  getMovieById(id: string | null) {
    console.log(MovieData.find(movie => movie.movieId === id))
    return MovieData.find(movie => movie.movieId === id);
  }
}
