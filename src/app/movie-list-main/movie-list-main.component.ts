import { Component } from '@angular/core';
import { MovieListComponent } from "../movie-list/movie-list.component";
import { FiltersComponent } from "../filters/filters.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-list-main',
  imports: [MovieListComponent, FiltersComponent, CommonModule],
  templateUrl: './movie-list-main.component.html',
  styleUrl: './movie-list-main.component.css'
})
export class MovieListMainComponent {
  indianLanguages = [
    "English",
    "Hindi",
    "Telugu",
    "Malayalam",
    "Kannada",
    "Gujarati",
    "Bengali",
    "Tamil",
    "Marathi",
    "Punjabi",
    "Odia",
    "Assamese",
    "Urdu",
  ];

  FilterOptions = [
    {
      filterTitle:"Languages",
      filterData:this.indianLanguages
    },
    {
      filterTitle:"Genres",
      filterData:this.indianLanguages
    },
    {
      filterTitle:"Format",
      filterData:this.indianLanguages
    }
  ];
}
