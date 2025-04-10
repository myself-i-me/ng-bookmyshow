import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieListComponent } from "./movie-list/movie-list.component";
import { CommonModule } from '@angular/common';
import { MovieListMainComponent } from "./movie-list-main/movie-list-main.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-bookmyshow';
}
