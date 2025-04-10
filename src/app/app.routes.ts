import {Routes } from '@angular/router';
import { MovieListMainComponent } from './movie-list-main/movie-list-main.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';

export const routes: Routes = [
    { path: '', component: MovieListMainComponent },
    { path: 'details/:id', component: MovieDetailsComponent },
    { path: 'seats', component: SeatSelectionComponent },
];
